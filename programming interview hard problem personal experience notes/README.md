# Programming interview hard problem personal experience 2018-10-14-1003

|||cps-notification-service |||cps notification service |||notification service

## Cps-Notification-Service

Cps-Notification-Service – Technical owner of project. Technical lead of the project. Technical owner of the product. Lead of the epic. Critical component – without its notifications, the BBC websites will not update with new content.

Notes: The service had to check if content was replicated in both Data Centres, to ensure availability.

Cps-Notification-Service – Technical lead (3 months +). Critical service - verifying and distributing publisher’s notifications. It posed great challenges, running into thread exhaustion deadlocks. Custom thread pool and capacity management solved this. Developed load-test suite and benchmarked a performance baseline. Other apps, like Curation-Api exhibited the same problem. The custom thread pool became practice for new apps and was retrospectively implemented for existing ones.

Notes: The load-test suite existed and it was part of our Integration Pipeline.

Cps-Notification-Service
After successfully leading Apigee and A127 I wanted to further develop both technical and soft skills I inquired about upcoming epics and volunteered as an epic owner. Senior staff entrusted me with a critical component - Cps-Notification-Service. Without its notifications BBC websites will not update with content from our CMSs.

The product was designed and delivered as a robust system, but not without challenges.

The Vivo-Live-Streams epic was merged with Cps-Notification-Service in my absence. It was in the same technical domain and initially the merge made sense. I did not account that this was not right from epic management perspective and I should have questioned it more. Post merge, it became difficult to manage tasks and resources, as priorities were clashing. I pushed for splitting part of Cps-Notification-Service in a separate epic, in order to bring priorities back in scope. I organised a micromanagement meeting to align priorities and reporting, re-establishing myself as liaison between the epic team and senior staff.

Initially I deemed Technical Feasibility meetings unnecessary and omitting them prevented me foreseeing problems that arose later.
A non-trivial technical problem manifested towards the end, causing us to slip the deadline. It was mitigated, with senior colleagues helping with communicating to stakeholders, that existing systems could be temporarily used, minus new functionality, avoiding audience impact.
Throwing more resources at it did not help, so I quickly delegated the challenging task to myself and an experienced colleague, not participating in pair rotation, remaining focused on the task. Released other resources, except another pair kept focused, in parallel, on non-functional requirements.

With increasing priority, imminent deadline and senior staff applying pressure, stress levels were rising both for my colleagues and me. To manage this I started having daily mini-stand-ups, outlining tasks and challenges for the day, updating senior members and keeping morale up by reminding my colleagues that they are doing a great job and we are almost done.

In the end the product was rolled out successfully, despite deadline slippage, and has had stable performance.

After the dust settled, advising with my line manager, I did root cause analysis of what went wrong. I feel responsible for the difficulties encountered in the Cps-Notifications-Service, and have drawn lessons from them. Going forward I will initially have frequent Technical Feasibility meetings and then have them as needed, pre-empting problems and challenging senior decisions when appropriate. Instead of inflating epics, I would separate them and then collaborate closely with the related epic lead. I would also include performance as part of the MVP, rather than as an optimisation. I have already applied some of this experience, advising in Breaking-News-Tool-v3 meetings. Not deterred, excited to apply the new experience, and wanting to develop further I have asked senior staff for owning more epics.


### Technical notes:

#### CAPACITY:

CapacityManager.scala was a Scala Object, so that it was a Singleton, as in the Singleton Design Pattern.

All functions (a.k.a. methods in Java) for manipulation of the capacity metric variables (exampleNumMaxConcurrentChecks, exampleNumConcurrentChecksInProgress)  were synchronized or had synchronized blocks inside them to ensure Thread safety.

```scala
currentCapacity(): Int = synchronized {
	exampleNumMaxConcurrentChecks – exampleGetNumOfConcurrentChecksInProgress
}
```
or

```scala
exampleGetNumOfConcurrentChecksInProgress(): Int = {
	synchronized{exampleNumConcurrentChecksInProgress}	
}

Int exampleNumMaxConcurrentChecks = 0
Int exampleNumConcurrentChecksInProgress = 0
```

A calculated percentage of the Capacity was used to be graphed on a Grafana/Graphite Dashboard. Other than the visibility on the human-readable monitoring Dashboards, it had automated monitoring via AWS CloudWatch Alarms. If any capacity related alarms were triggered, that would result in AutoScaling kicking in and horizontally scaling by provisioning more EC2 instances.

```scala
def exampleCapacityInUseAsPercentage(exampleNumConcurrentChecksInProgress: Int, exampleNumMaxConcurrentChecks: Int) = {
  val percentage = (exampleNumConcurrentChecksInProgress.toFloat / exampleNumMaxConcurrentChecks.toFloat) * 100
  "%.2f".format(percentage)
}

// Example capacity percentage calculation:
// Number of threads in custom thread pool: 500
// Number of concurrent checks in progress: 125
// percentage calculation formula/function: val percentage = (exampleNumConcurrentChecksInProgress.toFloat / exampleNumMaxConcurrentChecks.toFloat) * 100
// percentage = (125.00 / 500.00) * 100 = 0.25 * 100 = 25% of Capacity used.
```

### ONE DATACENTRE DOWN CHECKS:

It was using statuses form each Datacentre to check it’s availability.
It was also using the timestamp of the content to check in it has been updated in both Datacentres. It was comparing the timestamp from the message which has arrived, against the timestamp it got from the Datacentre for that content, and checking if the timestamp from the Datacentre is greater than or equal (>=) to the one from the message. If it was equal everything was fine. If it was greater than, things were still fine, it meant that while the current notification message was being processed, another change to the content has been done, which is reflected in a newer message in the queue, which we still haven’t gotten to, so it’s ok to discard the current message. If the timestamp from the server was less than the current timestamp it meant the content was stale and it did a couple of retries at different time intervals.

```scala
object ExampleDatacentreStatus extends Enumeration {
  val AvailableStatus, NotFoundStatus, TimeConflictStatus, NotAvailableStatus, UnexpectedStatus = Value
}
```

```scala
import example.package.ExampleDatacentreStatus._

import scala.util.{Failure, Success, Try}
import com.ning.http.client.Response
import java.util.Date

import org.joda.time.format.{DateTimeFormat, DateTimeFormatter}

case class ExampleDatacentreResponse(statusCode: Try[Int], lastModTimestamp: Try[Long]) {

  def exampleIsRecentEnough(lastChanged: Option[String]): Boolean = {
    val lastModTime: Option[Try[Long]] = lastChanged map ExampleDatacentreResponse.exampleLastChangedToMillis
    lastModTime match {
      case Some(changed) => (changed.isSuccess && lastModTimestamp.isSuccess) && (lastModTimestamp.get >= changed.get)
      case None => lastModTimestamp.isSuccess
    }
  }

  def exampleIsNotFoundResp: Boolean = {
    statusCode.getOrElse(0) == 404
  }

  def exampleIs5xxResp: Boolean = {
    statusCode.getOrElse(0) >= 500
  }

  def exampleIsConnectionFailureResp: Boolean = {
    statusCode.isFailure
  }

  def exampleIsOkResp: Boolean = {
    statusCode.getOrElse(0) == 200
  }

  def exampleGetStatus(lastChanged: Option[String] = None): ExampleDatacentreStatus.Value = {
    if (exampleIsConnectionFailureResp || exampleIs5xxResp) return NotAvailableStatus
    if (!exampleIsOkResp) return UnexpectedStatus
    if (exampleIsNotFoundResp) return NotFoundStatus
    if (!exampleIsRecentEnough(lastChanged)) return TimeConflictStatus
    AvailableStatus
  }

  private def exampleConvertToHumanDateTime(milliseconds: Long): String = {
    new Date(milliseconds).toString
  }

  override def toString: String = {
    val modified: String = if (lastModTimestamp.isSuccess) exampleConvertToHumanDateTime(lastModTimestamp.get) else "Getting modified failed."
    val status: String = if (statusCode.isSuccess) s"${statusCode.get}" else "Getting status failed."
    s"ExampleDatacenterResponse[lastModified: $modified, statusCode: $status]"
  }
}

object ExampleDatacentreResponse {
  private val lastChangededDateFormat: DateTimeFormatter = DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss+00:00")
  private val lastModTimeDateFormat: DateTimeFormatter = DateTimeFormat.forPattern("EEE, dd MMM yyyy HH:mm:ss zzz")

  def exampleLastChangedToMillis(value: String): Try[Long] = {
    Try(lastChangededDateFormat.parseDateTime(value).getMillis)
  }

  def exampleLastModTimeToMillis(value: String): Try[Long] = {
    Try(lastModTimeDateFormat.parseDateTime(value).getMillis)
  }

  def exampleGetFromResponse(resp: Response): ExampleDatacentreResponse = {
    ExampleDatacentreResponse(Success(resp.getStatusCode), exampleLastModTimeToMillis(resp.getHeader("Last-Modified")))
  }

  def exampleGetFromFailedResponse(e: Throwable): ExampleDatacentreResponse = {
    ExampleDatacentreResponse(Failure(e), Failure(e))
  }

  def exampleIsAvailable(dc1: ExampleDatacentreResponse, dc2: ExampleDatacentreResponse, lastChnaged: Option[String]): Boolean = {
    val datacentre1Status: _root_.example.package.ExampleDatacentreStatus.Value = dc1.exampleGetStatus(lastChnaged)
    val datacentre2Status: _root_.example.package.ExampleDatacentreStatus.Value = dc2.exampleGetStatus(lastChnaged)
    //
    (datacentre1Status == AvailableStatus && datacentre2Status == AvailableStatus) ||
      (datacentre1Status == AvailableStatus && datacentre2Status == NotAvailableStatus) ||
      (datacentre1Status == NotAvailableStatus && datacentre2Status == AvailableStatus)
  }

  def exampleIsItATimeConflict(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse, lastChanged: Option[String]): Boolean = {
    datacentre1.exampleGetStatus(lastChanged) == TimeConflictStatus || datacentre2.exampleGetStatus(lastChanged) == TimeConflictStatus
  }

  def exampleIsItANotFound(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    datacentre1.exampleGetStatus() == NotFoundStatus || datacentre2.exampleGetStatus() == NotFoundStatus
  }

  def exampleIsItAnUnexpectedStatus(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    datacentre1.exampleGetStatus() == UnexpectedStatus || datacentre2.exampleGetStatus() == UnexpectedStatus
  }

  // != as XOR operator
  def exampleIsOneDatacentreDown(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    (datacentre1.exampleGetStatus() == NotAvailableStatus) != (datacentre2.exampleGetStatus() == NotAvailableStatus)
  }
}
```

### RETRIES:

It was using a DAO (Data Access Object) to access the Datacentres.
It would retry either a default number of attempts and delay in milliseconds, or use the values set in the service configuration.
It would try to carry out checks to both Datacentres and if one of them is unsuccessful, it would go into the retry loop until it either gets a successful result from both Datacentres or runs out of number of retries.
If it ran out of number of retries it would log an error, put the content notification message, containing all the metadata for the content which failed the checks in a Dead Letter queue, where it could be investigated by a human. The Dead Letter queue had monitoring and alarms, so if there were a concerning amount of notifications going in the dead letter queue, and alarm would be triggered.

```scala
  val exampleDAO: ExampleDao
  val attempts: Int = 2
  val retryDelay: Int = 500


  private def exampleRetryANumberOfAttempts(exampleAttemptsRemaining: Int = attempts)(exampleBlockOfCodeToExecute: => Future[Boolean]): Future[Boolean] = {
    //    StatsD.increment("example.attempt")
    def exampleRetry: Future[Boolean] =
      if (exampleAttemptsRemaining == 0) {
        //        StatsD.increment("example.failed_all_attempts")
        //        failedAllDCAttempts.mark()
        logger.error(s"Verification of content after all retries failed for one or both datacentres.")
        Future.successful(false)
      } else {
        Thread.sleep(retryDelay)
        exampleRetryANumberOfAttempts(exampleAttemptsRemaining - 1)(exampleBlockOfCodeToExecute)
      }
    Try {
      exampleBlockOfCodeToExecute
    } match {
      case Success(exampleResult: Future[Boolean]) =>
        exampleResult.flatMap {
          case true =>
            StatsD.increment("datacentre.success")
            Future.successful(true)
          case false =>
            exampleRetry
        }
      case Failure(error) =>
        exampleRetry
    }
  }

```

|||Launcher with a scheduler
|||scala
|||scalatra

```scala
import ....akka.ServiceActorSystem

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.DefaultServlet
import org.eclipse.jetty.webapp.WebAppContext
import org.scalatra.servlet.ScalatraListener

import scala.concurrent.duration._

object Launcher extends App {
  import CustomExecutionContextWithCustomThreadPool.executionContext

  val port = sys.props.get("jetty.port") map (_.toInt) getOrElse 8080

  val server = new Server(port)
  val context = new WebAppContext

  context.setContextPath("/")
  context.setResourceBase("src/main/webapp")
  context.addEventListener(new ScalatraListener)
  context.addServlet(classOf[DefaultServlet], "/")

  implicit val system = ServiceActorSystem.actorSystem

  system.scheduler.schedule(initialDelay = 0.seconds, interval = 1L.microseconds)({
    SomeService.someProcessingMethod()
  })

  server.setHandler(context)
  server.start()
  server.join()
}
```

|||custom thread pool size custom execution context
|||scalatra
|||scala

```scala
package ...

import java.util.concurrent.Executors

import scala.concurrent.ExecutionContext

object CustomExecutionContextWithCustomThreadPool {
  val customThreadPoolSize#: Int = 5000
  implicit val executionContext: ExecutionContextExecutor = ExecutionContext.fromExecutor(Executors.newFixedThreadPool(customThreadPoolSize#))
}
```

|||notice processor scala
|||notice dispatcher scala

|||aws sqs process messages aws sqs
|||scala

```scala
processSQSMessage(): Future[List[Unit]] = {
	val messages = receiveMessagesFromSQS()
	//Future.sequence() transforms from List[Future[Unit]] to Future[List[Unit]]
	Future.sequence(messages map { message =>
			processOneSQSMessage(message)
		}
	)
}



receiveMessagesFromSQS() = {
	val processingCapacity: Int = currentCapacity()
	if(processingCapacity > 0) {
		//pick up messages from AWS SQS
		//do processing...
		List(awsSQSMessages.toList)
	} else {
		log.warn(s"Some warning.")
		List.empty
	}
}
```


|||notice processor scala
|||notice dispatcher scala

|||concurrency checks managing
|||scala

```scala

val exampleNumMaxConcurrentChecks: Int = 

var exampleNumConcurrentChecksInProgress: Int = 0

exampleIncrementNumConcurrentChecksInProgress(number: Int): Void = {
	synchronized{}
}

exampleDecrementNumConcurrentChecksInProgress(number: Int): Void = {
	synchronized{}
}

exampleGetNumOfConcurrentChecksInProgress() = {
	synchronized{exampleNumConcurrentChecksInProgress}	
}

currentCapacity(): Int = {exampleNumMaxConcurrentChecks - exampleGetNumOfConcurrentChecksInProgress}

gaugeCapacity(): Int = {
	exampleNumConcurrentChecksInProgress / exampleNumMaxConcurrentChecks
}

private def exampleDoStatsD = {
  try {
    StatsD.gauge("example.exampleNumConcurrentChecksInProgress", String.valueOf(exampleNumConcurrentChecksInProgress))
    StatsD.gauge("example.exampleCapacityInUseAsPercentage", exampleCapacityInUseAsPercentage(exampleNumConcurrentChecksInProgress, exampleNumMaxConcurrentChecks))
  } catch {
    case e: Exception => log.warn("Example stats updated encountered an error.", e)
  }
}

def exampleCapacityInUseAsPercentage(exampleNumConcurrentChecksInProgress: Int, exampleNumMaxConcurrentChecks: Int) = {
  val percentage = (exampleNumConcurrentChecksInProgress.toFloat / exampleNumMaxConcurrentChecks.toFloat) * 100
  "%.2f".format(percentage)
}
```

|||notice processor scala
|||notice dispatcher scala

|||http tuple request response
|||concurrency checks managing

|||with number of attempts
|||with#OfAttempts
|||with retries
|||scala

```scala
makeCallReturningTupleOfResults(): (Future[Response], Future[Response]) = {
	//make call1...
	//make call2...
	(response1, response2)
}


useTupleOfResultsPart1(someOtherParameter2: String, someOtherParameter3: String)(retrieveResponseTuple: => (Future[Response], Future[Response])) = {
	//do some processing...
	with#OfAttempts {
		val someOtherParameter: Option[String] = Some(someOtherParameter2 + someOtherParameter3)
		val (responseVal1, responseVal2) = retrieveResponseTuple
		useTupleOfResultsPart2(responseVal1, responseVal2, someOtherParameter)
	}
}


useTupleOfResultsPart2(result1: Future[Response], result2: Future[Response], someOtherParameter: Option[String]): Future[Boolean] = {
	for {
		res1 <- result1
		res2 <- result2
	} yield (res1.getStatusCode, res2.getStatusCode, someOtherParameter) match {
		case (200, 200, Some(valueOfsomeOtherParameter)) if !verify(valueOfsomeOtherParameter) =>
			//do some processing...
			false
		case (200, 200, _) =>
			//do some processing...
			log.info(s"Some info.")
			true
		case _ =>
        	log.warn(s"Some warning.")
        	false
	}
}
```

|||notice processor scala
|||notice dispatcher scala

|||with number of attempts
|||with#OfAttempts
|||with retries
|||withretries
|||concurrency checks managing
|||scala
|||attempts scala
|||tries scala

```scala
  private def with#OfAttempts(attemptsRemaining: Int = attempts)(block: => Future[Boolean]): Future[Boolean] = {
  	//stats

    def retry =
      if (attemptsRemaining == 0) {
        //stats
        failedAllContentApiAttempts.mark()
        log.error(s"Failed after all attempts.")
        Future.successful(false)
      } else {
        Thread.sleep(retryDelay)
        withRetries(attemptsRemaining - 1)(block)
      }

    Try {
      block
    } match {
      case Success(result: Future[Boolean]) =>
        result.flatMap {
          case true =>
            //stats
            Future.successful(true)
          case false =>
            retry
        }
      case Failure(error) =>
        retry
    }
  }

// usage:

withRetries() {
	//do stuff that requires retries...
}
```


## example-notice-processor-scala-one-datacentre-down-improvement

|||one datacentre down
|||one dc down
|||one datacenter down
|||datacentre tolerance

|||attempts scala |||attempts scala v2 |||attempts v2
|||tries scala |||tries scala v2 |||tries v2

|||notice processor scala |||notice processor scala v2
|||notice dispatcher scala |||notice dispatcher scala v2

```scala
package example.package

import example.package.StatsD
import example.package.ExampleDatacentreResponse
import example.package.ExampleDao

import org.slf4j.LoggerFactory

import com.ning.http.client.Response

import scala.util.{Failure, Success, Try}
import scala.concurrent.Future

trait ExampleDataCentreVerificationService {
  private val logger = LoggerFactory getLogger getClass

  import example.CustomExecutionContext.executionContext

  //  private val failedAllDCAttempts = CloudWatch.meter("example-datacentre-content-verification-failure")

  val exampleDAO: ExampleDao
  val attempts: Int = 2
  val retryDelay: Int = 500


  private def exampleRetryANumberOfAttempts(exampleAttemptsRemaining: Int = attempts)(exampleBlockOfCodeToExecute: => Future[Boolean]): Future[Boolean] = {
    //    StatsD.increment("example.attempt")
    def exampleRetry: Future[Boolean] =
      if (exampleAttemptsRemaining == 0) {
        //        StatsD.increment("example.failed_all_attempts")
        //        failedAllDCAttempts.mark()
        logger.error(s"Verification of content after all retries failed for one or both datacentres.")
        Future.successful(false)
      } else {
        Thread.sleep(retryDelay)
        exampleRetryANumberOfAttempts(exampleAttemptsRemaining - 1)(exampleBlockOfCodeToExecute)
      }
    Try {
      exampleBlockOfCodeToExecute
    } match {
      case Success(exampleResult: Future[Boolean]) =>
        exampleResult.flatMap {
          case true =>
            StatsD.increment("datacentre.success")
            Future.successful(true)
          case false =>
            exampleRetry
        }
      case Failure(error) =>
        exampleRetry
    }
  }

  private def exampleVerifyOneDatacentre(exampleDatacentreResult: Future[Response]): Future[ExampleDatacentreResponse] = {
    (for {
      exampleVerifyInDC <- exampleDatacentreResult
      exampleDcResponce = ExampleDatacentreResponse.exampleGetFromResponse(exampleVerifyInDC)
    } yield exampleDcResponce) recover {
      case e => ExampleDatacentreResponse.exampleGetFromFailedResponse(e)
    }
  }

  private def exampleVerifyAvailability(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse, urlLocator: String, lastModTimestamp: Option[String]): Boolean = {
    val datacentre1Status: _root_.example.package.ExampleDatacentreStatus.Value = datacentre1.exampleGetStatus(lastModTimestamp)
    val datacentre2Status: _root_.example.package.ExampleDatacentreStatus.Value = datacentre2.exampleGetStatus(lastModTimestamp)
    val dcIsAvailable: Boolean = ExampleDatacentreResponse.exampleIsAvailable(datacentre1, datacentre2, lastModTimestamp)

    if (dcIsAvailable) {
      logger.info(s"Successfully verified $urlLocator.")
      val isOneOfTheDCsDown: Boolean = ExampleDatacentreResponse.exampleIsOneDatacentreDown(datacentre1, datacentre2)
      if (isOneOfTheDCsDown) {
        logger.warn(s"One datacenter down when verifying [$urlLocator]: DC1 status: [$datacentre1Status $datacentre1] | DC2 status: [$datacentre2Status $datacentre2] | lastModTimestamp: [$lastModTimestamp]")
        //        StatsD.increment("example.datacenter_down")
      }
    } else {
      if (ExampleDatacentreResponse.exampleIsItATimeConflict(datacentre1, datacentre2, lastModTimestamp))
        logger.info(s"example.timestamp_failure")
      //        StatsD.increment("example.timestamp_failure")

      if (ExampleDatacentreResponse.exampleIsItANotFound(datacentre1, datacentre2))
        logger.info(s"example.not_found_failure")
      //        StatsD.increment("example.not_found_failure")

      if (ExampleDatacentreResponse.exampleIsItAnUnexpectedStatus(datacentre1, datacentre2))
        logger.info(s"example.unknown_failure")
      //        StatsD.increment("example.unknown_failure")

      logger.warn(s"Verification of [$urlLocator] failed: DC1 status: [$datacentre1Status $datacentre1] | DC2 status: [$datacentre2Status $datacentre2] | lastModTimestamp: [$lastModTimestamp]")
    }
    dcIsAvailable
  }

  private def exampleCheckDCResults(urlLocator: String, lastModTimestamp: Option[String], datacentre1Result: Future[Response], datacentre2Result: Future[Response]): Future[Boolean] = {
    for {
      checkInDC1: ExampleDatacentreResponse <- exampleVerifyOneDatacentre(datacentre1Result)
      checkInDC2: ExampleDatacentreResponse <- exampleVerifyOneDatacentre(datacentre2Result)
    } yield exampleVerifyAvailability(checkInDC1, checkInDC2, urlLocator, lastModTimestamp)
  }

  private def exampleCheckItemExists(urlLocator: String, lastModTimestamp: Option[String])(exampleRetrieveItems: => (Future[Response], Future[Response])): Future[Boolean] =
    StatsD.timeAsync("example.try_duration") {
      logger.info(s"Verifying content for item [$urlLocator]")
      exampleRetryANumberOfAttempts() {
        val (checkInDC1Future, checkInDC2Future) = exampleRetrieveItems
        exampleCheckDCResults(urlLocator, lastModTimestamp, checkInDC1Future, checkInDC2Future)
      }
    }

  def exampleCheckItemByURL(itemUrl: String, lastModTimestamp: Option[String]): Future[Boolean] =
    exampleCheckItemExists(itemUrl, lastModTimestamp) {
      exampleDAO.retrieveAssetsByUrl(itemUrl)
    }
}

object ExampleDataCentreVerificationService extends ExampleDataCentreVerificationService {
  override val exampleDAO = ExampleDao
}
```


```scala
package example.package

import example.package.ExampleDatacentreStatus._

import scala.util.{Failure, Success, Try}
import com.ning.http.client.Response
import java.util.Date

import org.joda.time.format.{DateTimeFormat, DateTimeFormatter}

case class ExampleDatacentreResponse(statusCode: Try[Int], lastModTimestamp: Try[Long]) {

  def exampleIsRecentEnough(lastChanged: Option[String]): Boolean = {
    val lastModTime: Option[Try[Long]] = lastChanged map ExampleDatacentreResponse.exampleLastChangedToMillis
    lastModTime match {
      case Some(changed) => (changed.isSuccess && lastModTimestamp.isSuccess) && (lastModTimestamp.get >= changed.get)
      case None => lastModTimestamp.isSuccess
    }
  }

  def exampleIsNotFoundResp: Boolean = {
    statusCode.getOrElse(0) == 404
  }

  def exampleIs5xxResp: Boolean = {
    statusCode.getOrElse(0) >= 500
  }

  def exampleIsConnectionFailureResp: Boolean = {
    statusCode.isFailure
  }

  def exampleIsOkResp: Boolean = {
    statusCode.getOrElse(0) == 200
  }

  def exampleGetStatus(lastChanged: Option[String] = None): ExampleDatacentreStatus.Value = {
    if (exampleIsConnectionFailureResp || exampleIs5xxResp) return NotAvailableStatus
    if (!exampleIsOkResp) return UnexpectedStatus
    if (exampleIsNotFoundResp) return NotFoundStatus
    if (!exampleIsRecentEnough(lastChanged)) return TimeConflictStatus
    AvailableStatus
  }

  private def exampleConvertToHumanDateTime(milliseconds: Long): String = {
    new Date(milliseconds).toString
  }

  override def toString: String = {
    val modified: String = if (lastModTimestamp.isSuccess) exampleConvertToHumanDateTime(lastModTimestamp.get) else "Getting modified failed."
    val status: String = if (statusCode.isSuccess) s"${statusCode.get}" else "Getting status failed."
    s"ExampleDatacenterResponse[lastModified: $modified, statusCode: $status]"
  }
}

object ExampleDatacentreResponse {
  private val lastChangededDateFormat: DateTimeFormatter = DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss+00:00")
  private val lastModTimeDateFormat: DateTimeFormatter = DateTimeFormat.forPattern("EEE, dd MMM yyyy HH:mm:ss zzz")

  def exampleLastChangedToMillis(value: String): Try[Long] = {
    Try(lastChangededDateFormat.parseDateTime(value).getMillis)
  }

  def exampleLastModTimeToMillis(value: String): Try[Long] = {
    Try(lastModTimeDateFormat.parseDateTime(value).getMillis)
  }

  def exampleGetFromResponse(resp: Response): ExampleDatacentreResponse = {
    ExampleDatacentreResponse(Success(resp.getStatusCode), exampleLastModTimeToMillis(resp.getHeader("Last-Modified")))
  }

  def exampleGetFromFailedResponse(e: Throwable): ExampleDatacentreResponse = {
    ExampleDatacentreResponse(Failure(e), Failure(e))
  }

  def exampleIsAvailable(dc1: ExampleDatacentreResponse, dc2: ExampleDatacentreResponse, lastChnaged: Option[String]): Boolean = {
    val datacentre1Status: _root_.example.package.ExampleDatacentreStatus.Value = dc1.exampleGetStatus(lastChnaged)
    val datacentre2Status: _root_.example.package.ExampleDatacentreStatus.Value = dc2.exampleGetStatus(lastChnaged)
    //
    (datacentre1Status == AvailableStatus && datacentre2Status == AvailableStatus) ||
      (datacentre1Status == AvailableStatus && datacentre2Status == NotAvailableStatus) ||
      (datacentre1Status == NotAvailableStatus && datacentre2Status == AvailableStatus)
  }

  def exampleIsItATimeConflict(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse, lastChanged: Option[String]): Boolean = {
    datacentre1.exampleGetStatus(lastChanged) == TimeConflictStatus || datacentre2.exampleGetStatus(lastChanged) == TimeConflictStatus
  }

  def exampleIsItANotFound(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    datacentre1.exampleGetStatus() == NotFoundStatus || datacentre2.exampleGetStatus() == NotFoundStatus
  }

  def exampleIsItAnUnexpectedStatus(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    datacentre1.exampleGetStatus() == UnexpectedStatus || datacentre2.exampleGetStatus() == UnexpectedStatus
  }

  // != as XOR operator
  def exampleIsOneDatacentreDown(datacentre1: ExampleDatacentreResponse, datacentre2: ExampleDatacentreResponse): Boolean = {
    (datacentre1.exampleGetStatus() == NotAvailableStatus) != (datacentre2.exampleGetStatus() == NotAvailableStatus)
  }
}

```

```scala
package example.package

object ExampleDatacentreStatus extends Enumeration {
  val AvailableStatus, NotFoundStatus, TimeConflictStatus, NotAvailableStatus, UnexpectedStatus = Value
}
```

## example-notice-processor-scala-retry-attempts-v3

|||attempts scala |||attempts scala v3 |||attempts v3
|||tries scala |||tries scala v3 |||tries v3

|||notice processor scala |||notice processor scala v3
|||notice dispatcher scala |||notice dispatcher scala v3

|||retry a block of code scala
|||attempt a block of code scala

```scala
package example.package

import example.package.mixin.ExampleCustomExecutionContext

import scala.concurrent.Future

object ExampleRetryABlockOfCodeXTimes extends ExampleCustomExecutionContext {
  def apply[A](xAttempts: Int, exampleErrorHandler: PartialFunction[Throwable, Unit])(blockOfCode: => Future[A]): Future[A] = {
    def loop(remainingXAttempts: Int): Future[A] = blockOfCode recoverWith {
      case _ if remainingXAttempts > 1 =>
        loop(remainingXAttempts - 1)
      case e =>
        exampleErrorHandler(e)
        Future.failed(e)
    }
    loop(xAttempts)
  }
}

// example uses:

val exampleNumberOfRetriesOrAttempts = 5

Retry(exampleNumberOfRetriesOrAttempts, exampleErrorHandler("example-error-message")) {
	// block of code to retry
	// if it throws an exception or returns a Future.failed() it will be retried if there are more attempts remaining
}

// The exampleErrorHandler function is defined separately by each class/object/thing which is using the ExampleyRetryABlockOfCodeXTimes so that it can pass custom error messages and increment specific stats. Also StatsD seems to be difficult/impossible to mock.

// Example errorHandler function defined in one of the scala classes which is using it.

private def exampleErrorHandler(extraInfo: String): PartialFunction[Throwable, Unit] = {
  case e =>
    // StatsD
    increment(s"error-retries-$statsKey-$extraInfo", s"error.retries.$statsKey.$extraInfo")
    val logMessage = s"$extraInfo failed after retrying $daoRetries times with exception [${e.getMessage}]"
    log.error(logMessage)
    Future.failed(new Exception())
}

// Another example:

private def exampleErrorHandler[T](method: String, extralInfo: String): PartialFunction[Throwable, Future[T]] = {
      case e =>
        log.error("example error " + extralInfo)
        Future.failed(new Exception())
    }

// Another example:

private def exampleErrorHandler(response: Response, extralInfo: String) = {
    log.error(s"example error ${response.getStatusCode()}" + extralInfo)
    Future.failed(new Exception())
  }

```

---

## CPS-Breaking-News myBBC integration

CPS-Breaking-News myBBC integration – Technical lead. The hardest technical challenge was designing and implementing the mechanism for switching from Boxcar to Ingress. It had to be seamless for our users and audiences. Under my high scrutiny for analysis, design and quality, we built a robust mechanism. I insisted on, and promoted pair-programming, test-driven-development and code reviews for each task, and gave constructive feedback. Not only did the mechanism allow for a seamless transition, but was toggled only by a Cosmos configuration change and redeployment, a big advantage in speed, to a release toggled one. It is also highly reusable – will be used for all News, Sport and WorldService sites.
Another challenge was collaboration within the team - work for two epics was happening simultaneously on one codebase. I alleviated this through frequent consultation and coordination with the other epic lead.
As this was a high-profile, hard deadline project, I applied my effective epic management skills, gained from previous experience. I used Eisenhower’s urgent vs. important decision principle to break down and group tasks. Tasks, required for bringing the journalists back in CPS on time before the General Election 2017, I marked as ‘urgent and important’, and tasks, vital for the actual Election, such as monitoring and support tools, I grouped as ‘not-urgent, but important’. This helped me hit all milestones along the way. As usual, after changes, I updated the runbook information and diagrams documentation, so it’s in good shape to aid monitoring and support. Also volunteered for UK General Elections 2017 support.


### CPS-Breaking-News myBBC integration

After delivering CPS-Notification-Service, I wanted to demonstrate I have taken improvement feedback on board. Always looking to develop both soft and technical skills I desired owning another epic and volunteered to lead the myBBC integration.

The project posed challenges from the beginning, demanding constant liaising and coordination with project management and several other teams at all times. A further complication, I had to adapt to, was the strict deadline after the surprise General Election. This cut the time to the deadline from four weeks to two.

I held a thorough Tech-Feasibility meeting, aiding me to precisely analyse and estimate tasks and manage resources, as there were no error margins. Had to be extra sensitive and deflate escalating situations as pressure took its toll on everyone and conflicts arose between teams.

While aligning priorities it seemed not all teams might be ready in time. I had to provision for this and prepared for direct integration with UrbanAirship. Obtained direct contacts and held a video-conference for analysis and technical challenges evaluation. When the other teams confirmed they would align with the deadline I pivoted around and continued.

Developing seamless switching was a non-trivial technical challenge and we did it under high pressure.

Involved was quick work, cross departmental collaboration within and outside of CPS, News, Editorial and Product teams, pulling together from across the organisation. I had to go above and beyond, and jump out of the comfort of my current role, and perform as a senior and occasionally principal software engineer, communicating and negotiating in meetings with Product Owners and Senior Managers. Proposed, coordinated and met migration and testing strategies between Editorial, NewsApps and myBBC. 

I negotiated a 24-hour slip margin, indispensable when we had a hiccup a day before a critical milestone. The close-working relationship I had fostered with other teams resulted in easy cross team collaboration and prompt resolution.

This successfully brought journalists back in CPS on time.

The performance improvement - going down from a 20-minute delay to 20-second notification delivery, a huge improvement over the previous system. The BBC exit poll alert hit mobiles before any other News organisation.

I am genuinely happy because this made a tremendous difference to the Election night coverage for editorial - using CPS rather than a console hack.

I led a joint presentation with Ingress on architectural changes we had made including an end-to-end demo of sending an alert. This was in front of all myBBC teams and was very well accepted by seniors, who invited me to attend future sessions.

I designed this solution to be re-usable and I am confident I will bring the same results for Sport.

Looking forward on working together on next phases and more projects such as this.

```java
package java8.play2.example.utilities;

import java8.play2.example.aws.ExampleDynamoDbDaoLayer;
import java8.play2.example.aws.dummies.DummyDefaultDynamoDbDaoLayer;

import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;

import com.amazonaws.util.StringUtils;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import java.util.Map;
import java.util.Iterator;

import java.nio.file.Paths;
import java.nio.file.Files;

import javax.inject.Singleton;

@Singleton
public class ExampleEnvConfiguration {
    private final static Logger LOGGER = LoggerFactory.getLogger(ExampleEnvConfiguration.class);

    private static String defaultExampleServerConfPath = "/etc/default/exampleJSONConfigurationFile.json";

    public static int exampleStubServerPort = 3333;
    public static String exampleStubServerHost = "http://localhost";

    private static JsonNode getDeployedConfigJson() {
        JsonNode configfile = null;
        try {
            configfile = Json.parse(Files.readAllBytes(Paths.get(defaultExampleServerConfPath)));
        } catch (Exception e) {
            LOGGER.error("Unable to readNumberOfSQSMsgs the config file.", e);
        }
        return configfile;
    }

    public static String systemRunningEnvironment() {
        String runningEnvironment = System.getenv("DEFAULT_SYSTEM_ENV");
        LOGGER.info("System running environment: " + runningEnvironment);
        System.out.println("System running environment: " + runningEnvironment);
        if (StringUtils.isNullOrEmpty(runningEnvironment)) {

            boolean isDefaultServerConfReadable = Files.isReadable(Paths.get(defaultExampleServerConfPath));
            LOGGER.info("Default server configuration file located at " + defaultExampleServerConfPath + " exists and is readable: " + isDefaultServerConfReadable);

            JsonNode defaultConfigAsJSON;
            try {defaultConfigAsJSON = Json.parse(Files.readAllBytes(Paths.get(defaultExampleServerConfPath)));
                if (isDefaultServerConfReadable && defaultConfigAsJSON != null) {
                    defaultExampleSetEnvProps(defaultConfigAsJSON);
                    return defaultConfigAsJSON.get("env").textValue();
                } else {
                    throw new Exception("Default server configuration file  " + defaultExampleServerConfPath + "exists but value for the env key could not be found.");
                }
            } catch (Exception ex) {
                LOGGER.error("Not able to read server configuration file.", ex);
            }
        }
        return runningEnvironment;
    }

    public static void defaultExampleSetEnvProps(JsonNode jsonNode) {
        Iterator<Map.Entry<String, JsonNode>> defaultJsonConfigFields = null;
        try {
            defaultJsonConfigFields = jsonNode.get("default_example_config").fields();
            LOGGER.info("Processing and setting system configuration...");
            while (defaultJsonConfigFields.hasNext()) {
                Map.Entry<String, JsonNode> configEntry = defaultJsonConfigFields.next();
                String configKey = configEntry.getKey();
                JsonNode nodeValue = configEntry.getValue();
                String configValue = nodeValue.textValue();
                System.setProperty(configKey, configValue);
            }
        } catch (Exception ex) {
            LOGGER.warn("Exceptional behaviour encoutered.", ex);
            System.out.println("Exceptional behaviour encoutered.");
        }
    }

    public static void setEnvironmentVariables() {
        ExampleEnvInit environmentSetup = new ExampleEnvInit(systemRunningEnvironment());
    }

    // Validate for null or empty.
    private String validateForNullOrEmptyAndGet(String keyName) {
        String keyValue = System.getProperty(keyName);
        if (org.apache.commons.lang.StringUtils.isEmpty(keyValue)) {
            LOGGER.error("Key " + keyName + " is null or empty.");
            throw new IllegalArgumentException("Key " + keyName + " is null or empty.");
        }
        return keyValue.trim();
    }

    public static ExampleDynamoDbDaoLayer getDynamoClient() {
        String env = ExampleEnvConfiguration.systemRunningEnvironment();
        if (env.equals("dev") || env.equals("mgmt")) {
            return new DummyDefaultDynamoDbDaoLayer();
        } else {
            return new ExampleDynamoDbDaoLayer();
        }
    }

    public static String getDefaultMongoDBConnectionUrl() {
        return "mongodb://localhost:27017";
    }
}
```


```java

package java8.play2.example.utilities;

import java.io.IOException;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.apache.commons.lang.StringUtils;

import com.amazonaws.util.IOUtils;

public class ExampleUtils {

    private final Logger LOG = LoggerFactory.getLogger(ExampleUtils.class);

    public static String exampleGetSystemProp(String name) {
        String qualifiedName = appendLiveProductionSuffix(name);
        return System.getProperty(qualifiedName);
    }

    public String exampleGetResource(String nameOfFile) throws IOException {
        try {
            return IOUtils.toString(getClass().getClassLoader().getResourceAsStream(nameOfFile));
        } catch (IOException e) {
            LOG.error("IOException encountered when tried loading resource file." + e);
            throw e;
        } catch (Exception ex) {
            LOG.error("Exception!" + ex);
            throw ex;
        }
    }

    public static String exampleEnviroNameWithFallback(String env) {
        return ((StringUtils.isBlank(env)) || (env.equals("development"))) ? "integration" : env;
    }

// Monitoring example use:
// dimension.setValue(ExampleUtils.exampleEnviroNameWithFallback(defaultAwsCredentialsConfigurator.getEnvironment()));


    public static String appendLiveProductionSuffix(String propNameNoSuffix) {
        String enviro = System.getProperty("DEFAULT_SYSTEM_ENV");
        if(StringUtils.isNotEmpty(enviro) && enviro.equals("production")){
            return propNameNoSuffix.concat(".live");
        }
        return propNameNoSuffix;
    }
}

```

```java

package java8.play2.example.utilities;

import java8.play2.example.aws.ExampleCloudWatchObserver;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Singleton;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import play.libs.F.Promise;
import play.libs.ws.WS;
import play.libs.ws.WSResponse;

@Singleton
public class ExampleUrlShortener {

    private static final Logger LOG = LoggerFactory.getLogger(ExampleUrlShortener.class);
    private static final String BITLY_SHORTEN_SERVICES_ENDPOINT = "https://api-ssl.bitly.com/v3/shorten";
    private static final String BITLY_ACCESS_TOKEN = "bitly.urlShortener.accessToken";

    private static final int REQUEST_TIMEOUT = 30000;
    private ExampleCloudWatchObserver monitor;

    /**
     * Method for shortening a url using bitly
     *
     * @param fullUrl url to be shortened
     *
     * @return a shortened url, if any; throw an exception if not (null shouldn't be used
     * as a return value here as we want it to fail)
     */

    public String shorten(String fullUrl) throws Exception{

        if(StringUtils.isEmpty(fullUrl)) {
            monitor.alarmOff("UrlShortenerFailure");
            throw new IllegalArgumentException("Full Url must be provided for shortening service");
        }

        String bitlyAccessToken = ExampleUtils.exampleGetSystemProp(BITLY_ACCESS_TOKEN);

        if (StringUtils.isEmpty(bitlyAccessToken)) {
            monitor.alarmOff("UrlShortenerFailure");
            throw new IllegalStateException("Bitly access token not found (property is not set: " + ExampleUtils.appendLiveProductionSuffix(BITLY_ACCESS_TOKEN) + ")");
        }

        Promise<WSResponse> res = WS.url(BITLY_SHORTEN_SERVICES_ENDPOINT)
                .setQueryParameter("access_token", bitlyAccessToken)
                .setQueryParameter("longUrl", fullUrl)
                .setRequestTimeout(REQUEST_TIMEOUT)
                .get();

        JsonNode responseNode = res.get(REQUEST_TIMEOUT).asJson();
        JsonNode shortenedUrlNode = responseNode.findValue("url");

        if(shortenedUrlNode == null){
            monitor.alarmOff("UrlShortenerFailure");

            LOG.error("Unable to shorten the URL.  status_code -> " +
                        responseNode.findValue("status_code").asText() +
                        " status_text "+  responseNode.findValue("status_txt").asText());

           throw new Exception("Couldn't find 'url' value in jsonNode prodcued for Url shorter");
        }
        else {
            LOG.info("Shortened the URL -> "+ shortenedUrlNode.textValue());
            monitor.alarmOn("UrlShortenerFailure");
            return shortenedUrlNode.textValue();
        }
    }

    public void setMonitor(ExampleCloudWatchObserver monitor) {
        this.monitor = monitor;
    }
}

```


```java

package java8.play2.example.utilities;

import org.junit.Test;
import org.junit.Assert;

public class ExampleUtilsTest {
    @Test
    public void environmentNameTest() throws Exception {
        Assert.assertEquals("test", ExampleUtils.exampleEnviroNameWithFallback("test"));
        Assert.assertEquals("integration", ExampleUtils.exampleEnviroNameWithFallback("integration"));
        Assert.assertEquals("integration", ExampleUtils.exampleEnviroNameWithFallback("development"));
        Assert.assertEquals("integration", ExampleUtils.exampleEnviroNameWithFallback(""));
    }
}

```


```java

package java8.play2.example.services;

import java8.play2.example.monitoring.ExampleJavaStatsD;
import java8.play2.example.utilities.ExampleUtils;

import com.google.inject.Inject;

public class ExampleServiceWithStubForCucumberTestsMockServerImpl implements ExampleServiceWithStubForCucumberTestsMockServer {
    private ExampleJavaStatsD statsDClient;

    @Inject
    public ExampleServiceWithStubForCucumberTestsMockServerImpl() {
        this.statsDClient = new ExampleJavaStatsD();
    }

    public String getSomeExampleString() {
        String someExampleString = "";
        try {
            someExampleString =
                    String.format("insert-in-string-here-%s-string-text-after-insert",
                            ExampleUtils.exampleGetSystemProp("some prop key name"));

        } catch (Exception e) {
            statsDClient.exampleIncrementDefaultErrorCounter();
        }
        return someExampleString;
    }
}

```

---

### Other

Have been positive about changes and quickly adopted and promoted pair programming and code reviews for Breaking-News-Tool and Cps-Notification-Service. Adapted to new ways of working like functional programming, Continuous Delivery, and continued to deliver work for both projects.

Simultaneously worked on Content-Api and Apigee, and Radar and A127, successfully delivering each. 

While pairing with a graduate on reverse engineering Vivo-Api functionality. The graduate was doubtful whether I was teaching the right way, as we were not adding new tests. I explained in this case fixing existing tests is our TDD guide. Afterwards we developed a feature, where we wrote tests first. The graduate saw the difference and gained confidence in my mentoring.

While my line manager was on leave he delegated both technical and micromanagement tasks to me.

Volunteered and I am currently mentoring a graduate.


Always looking for suitable trainings and conferences to improve both technical and soft skills. Have expressed interest in management courses to further develop my interpersonal and leadership skills. Attended resilience course and voluntary workshop.

I strived to improve my presentation skills. Researching delivering powerful presentations I thought myself to be concise and to the point, to take pauses and that less text has more impact. I pushed myself to do more 10% projects and presentations to practice these techniques. I applied this knowledge on the co-developed Vivo-Admin, which was nominated among other projects for presentation at an Online Production Systems demos. It was very well received, and is backlog scheduled for production development.

Certifications:  
  - Oracle Certified Java6SE Programmer, 2011
  - Fast Track to Scala, 2014
  - Advanced Scala, 2016

Conferences:
  - QCon 2014
  - ScalaXchange 2015
  - MongoDB 2016


Volunteered for US Presidential Elections 2016 overnight support.

Volunteered for UK General Elections 2017 support.

---

|||bar raiser interview

Organized Retrospectives by introducing an “Anonymous Retro Box” for anonymous post it notes, so that uncomfortable topics would not get left out of the discussion.

---


