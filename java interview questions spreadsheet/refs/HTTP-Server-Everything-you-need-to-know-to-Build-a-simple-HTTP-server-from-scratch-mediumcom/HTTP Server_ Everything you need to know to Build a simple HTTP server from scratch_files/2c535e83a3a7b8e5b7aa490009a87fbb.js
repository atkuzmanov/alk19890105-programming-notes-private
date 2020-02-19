document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-13f839f7454b3a5b3bfbfd6d1e34ec9d.css">')
document.write('<div id=\"gist88312791\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-tcpserver-c\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-c \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-tcpserver-c-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-tcpserver-c-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Server side C program to demonstrate Socket programming<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-tcpserver-c-LC2\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>stdio.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-tcpserver-c-LC3\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>sys/socket.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-tcpserver-c-LC4\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>unistd.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-tcpserver-c-LC5\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>stdlib.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-tcpserver-c-LC6\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>netinet/in.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-tcpserver-c-LC7\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>string.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-tcpserver-c-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-tcpserver-c-LC9\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">PORT<\/span> <span class=\"pl-c1\">8080<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-tcpserver-c-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> <span class=\"pl-en\">main<\/span>(<span class=\"pl-k\">int<\/span> argc, <span class=\"pl-k\">char<\/span> <span class=\"pl-k\">const<\/span> *argv[])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-tcpserver-c-LC11\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-tcpserver-c-LC12\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">int<\/span> server_fd, new_socket; <span class=\"pl-k\">long<\/span> valread;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-tcpserver-c-LC13\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">struct<\/span> sockaddr_in address;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-tcpserver-c-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">int<\/span> addrlen = <span class=\"pl-k\">sizeof<\/span>(address);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-tcpserver-c-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-tcpserver-c-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">char<\/span> *hello = <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Hello from server<span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-tcpserver-c-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-tcpserver-c-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Creating socket file descriptor<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-tcpserver-c-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> ((server_fd = <span class=\"pl-c1\">socket<\/span>(AF_INET, SOCK_STREAM, <span class=\"pl-c1\">0<\/span>)) == <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-tcpserver-c-LC20\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-tcpserver-c-LC21\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">perror<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>In socket<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-tcpserver-c-LC22\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">exit<\/span>(EXIT_FAILURE);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-tcpserver-c-LC23\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-tcpserver-c-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-tcpserver-c-LC25\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-tcpserver-c-LC26\" class=\"blob-code blob-code-inner js-file-line\">    address.<span class=\"pl-smi\">sin_family<\/span> = AF_INET;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-tcpserver-c-LC27\" class=\"blob-code blob-code-inner js-file-line\">    address.<span class=\"pl-smi\">sin_addr<\/span>.<span class=\"pl-smi\">s_addr<\/span> = INADDR_ANY;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-tcpserver-c-LC28\" class=\"blob-code blob-code-inner js-file-line\">    address.<span class=\"pl-smi\">sin_port<\/span> = <span class=\"pl-c1\">htons<\/span>( PORT );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-tcpserver-c-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-tcpserver-c-LC30\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">memset<\/span>(address.<span class=\"pl-smi\">sin_zero<\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\0<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-k\">sizeof<\/span> address.<span class=\"pl-smi\">sin_zero<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-tcpserver-c-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-tcpserver-c-LC32\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-tcpserver-c-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> (<span class=\"pl-c1\">bind<\/span>(server_fd, (<span class=\"pl-k\">struct<\/span> sockaddr *)&amp;address, <span class=\"pl-k\">sizeof<\/span>(address))&lt;<span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-tcpserver-c-LC34\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-tcpserver-c-LC35\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">perror<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>In bind<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-tcpserver-c-LC36\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">exit<\/span>(EXIT_FAILURE);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-tcpserver-c-LC37\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-tcpserver-c-LC38\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> (<span class=\"pl-c1\">listen<\/span>(server_fd, <span class=\"pl-c1\">10<\/span>) &lt; <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-tcpserver-c-LC39\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-tcpserver-c-LC40\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">perror<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>In listen<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-tcpserver-c-LC41\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">exit<\/span>(EXIT_FAILURE);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-tcpserver-c-LC42\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-tcpserver-c-LC43\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">while<\/span>(<span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-tcpserver-c-LC44\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-tcpserver-c-LC45\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-cce\">\\n<\/span>+++++++ Waiting for new connection ++++++++<span class=\"pl-cce\">\\n\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-tcpserver-c-LC46\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">if<\/span> ((new_socket = <span class=\"pl-c1\">accept<\/span>(server_fd, (<span class=\"pl-k\">struct<\/span> sockaddr *)&amp;address, (<span class=\"pl-c1\">socklen_t<\/span>*)&amp;addrlen))&lt;<span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-tcpserver-c-LC47\" class=\"blob-code blob-code-inner js-file-line\">        {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-tcpserver-c-LC48\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-c1\">perror<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>In accept<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-tcpserver-c-LC49\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-c1\">exit<\/span>(EXIT_FAILURE);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-tcpserver-c-LC50\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-tcpserver-c-LC51\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-tcpserver-c-LC52\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">char<\/span> buffer[<span class=\"pl-c1\">30000<\/span>] = {<span class=\"pl-c1\">0<\/span>};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-tcpserver-c-LC53\" class=\"blob-code blob-code-inner js-file-line\">        valread = <span class=\"pl-c1\">read<\/span>( new_socket , buffer, <span class=\"pl-c1\">30000<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-tcpserver-c-LC54\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-c1\">%s<\/span><span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>,buffer );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-tcpserver-c-LC55\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">write<\/span>(new_socket , hello , <span class=\"pl-c1\">strlen<\/span>(hello));<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-tcpserver-c-LC56\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>------------------Hello message sent-------------------<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-tcpserver-c-LC57\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">close<\/span>(new_socket);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-tcpserver-c-LC58\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-tcpserver-c-LC59\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">0<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpserver-c-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-tcpserver-c-LC60\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/SkrewEverything/2c535e83a3a7b8e5b7aa490009a87fbb/raw/605c820ddeab025cfe31d7010348ddebed1a6fb4/TCPServer.c\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/SkrewEverything/2c535e83a3a7b8e5b7aa490009a87fbb#file-tcpserver-c\">TCPServer.c<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
