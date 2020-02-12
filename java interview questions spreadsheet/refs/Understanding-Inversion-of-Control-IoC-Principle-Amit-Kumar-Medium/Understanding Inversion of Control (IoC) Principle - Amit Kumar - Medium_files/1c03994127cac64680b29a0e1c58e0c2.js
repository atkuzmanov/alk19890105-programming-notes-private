document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-13f839f7454b3a5b3bfbfd6d1e34ec9d.css">')
document.write('<div id=\"gist97866397\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-librarysl-java\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-java \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-librarysl-java-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-librarysl-java-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">class<\/span> <span class=\"pl-en\">ServiceLocator<\/span>...<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-librarysl-java-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">private<\/span> <span class=\"pl-k\">static<\/span> ServiceLocator sInstance;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-librarysl-java-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">static<\/span> void load(ServiceLocator arg) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-librarysl-java-LC4\" class=\"blob-code blob-code-inner js-file-line\">        sInstance <span class=\"pl-k\">=<\/span> arg;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-librarysl-java-LC5\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-librarysl-java-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">private<\/span> <span class=\"pl-smi\">Map<\/span> services <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-smi\">HashMap<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-librarysl-java-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">static<\/span> <span class=\"pl-smi\">Object<\/span> getService(<span class=\"pl-smi\">String<\/span> key){<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-librarysl-java-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> sInstance<span class=\"pl-k\">.<\/span>services<span class=\"pl-k\">.<\/span>get(key);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-librarysl-java-LC9\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-librarysl-java-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">void<\/span> loadService (<span class=\"pl-smi\">String<\/span> key, <span class=\"pl-smi\">Object<\/span> service) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-librarysl-java-LC11\" class=\"blob-code blob-code-inner js-file-line\">        services<span class=\"pl-k\">.<\/span>put(key, service);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-librarysl-java-LC12\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-librarysl-java-LC13\" class=\"blob-code blob-code-inner js-file-line\">   <span class=\"pl-c1\">.....<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-librarysl-java-LC14\" class=\"blob-code blob-code-inner js-file-line\">   <span class=\"pl-c1\">.....<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-librarysl-java-LC15\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-librarysl-java-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-librarysl-java-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> A simple assembler class.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-librarysl-java-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">class<\/span> <span class=\"pl-en\">Tester<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-librarysl-java-LC19\" class=\"blob-code blob-code-inner js-file-line\">   <span class=\"pl-k\">private<\/span> <span class=\"pl-k\">void<\/span> <span class=\"pl-en\">configure<\/span>() {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-librarysl-java-LC20\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-smi\">ServiceLocator<\/span> locator <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">new<\/span> <span class=\"pl-smi\">ServiceLocator<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-librarysl-java-LC21\" class=\"blob-code blob-code-inner js-file-line\">        locator<span class=\"pl-k\">.<\/span>loadService(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>LocalBookFinder<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">new<\/span> <span class=\"pl-smi\">LocalBookFinder<\/span>());<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-librarysl-java-LC22\" class=\"blob-code blob-code-inner js-file-line\">        locator<span class=\"pl-k\">.<\/span>loadService(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>RemoteBookFinder<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-k\">new<\/span> <span class=\"pl-smi\">RemoteBookFinder<\/span>());      <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-librarysl-java-LC23\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-smi\">ServiceLocator<\/span><span class=\"pl-k\">.<\/span>load(locator);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-librarysl-java-LC24\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-librarysl-java-LC25\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-librarysl-java-LC26\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-librarysl-java-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">class<\/span> <span class=\"pl-en\">Library<\/span>...<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-librarysl-java-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-librarysl-java-LC28\" class=\"blob-code blob-code-inner js-file-line\">BookFinder finder = (BookFinder) ServiceLocator.getService(&quot;LocalBookFinder&quot;);<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/amitkma/1c03994127cac64680b29a0e1c58e0c2/raw/3b2ef688b70fce2ee03d07e344d42eafdb2c2568/LibrarySL.java\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/amitkma/1c03994127cac64680b29a0e1c58e0c2#file-librarysl-java\">LibrarySL.java<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
