document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-13f839f7454b3a5b3bfbfd6d1e34ec9d.css">')
document.write('<div id=\"gist88312857\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-tcpclient-c\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-c \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-tcpclient-c-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-tcpclient-c-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Client side C/C++ program to demonstrate Socket programming<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-tcpclient-c-LC2\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>stdio.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-tcpclient-c-LC3\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>sys/socket.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-tcpclient-c-LC4\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>stdlib.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-tcpclient-c-LC5\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>unistd.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-tcpclient-c-LC6\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>netinet/in.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-tcpclient-c-LC7\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>string.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-tcpclient-c-LC8\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>arpa/inet.h<span class=\"pl-pds\">&gt;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-tcpclient-c-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-tcpclient-c-LC10\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">PORT<\/span> <span class=\"pl-c1\">8080<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-tcpclient-c-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-tcpclient-c-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> <span class=\"pl-en\">main<\/span>(<span class=\"pl-k\">int<\/span> argc, <span class=\"pl-k\">char<\/span> <span class=\"pl-k\">const<\/span> *argv[])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-tcpclient-c-LC13\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-tcpclient-c-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">int<\/span> sock = <span class=\"pl-c1\">0<\/span>; <span class=\"pl-k\">long<\/span> valread;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-tcpclient-c-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">struct<\/span> sockaddr_in serv_addr;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-tcpclient-c-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">char<\/span> *hello = <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Hello from client<span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-tcpclient-c-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">char<\/span> buffer[<span class=\"pl-c1\">1024<\/span>] = {<span class=\"pl-c1\">0<\/span>};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-tcpclient-c-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> ((sock = <span class=\"pl-c1\">socket<\/span>(AF_INET, SOCK_STREAM, <span class=\"pl-c1\">0<\/span>)) &lt; <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-tcpclient-c-LC19\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-tcpclient-c-LC20\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-cce\">\\n<\/span> Socket creation error <span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-tcpclient-c-LC21\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> -<span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-tcpclient-c-LC22\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-tcpclient-c-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-tcpclient-c-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">memset<\/span>(&amp;serv_addr, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>0<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-k\">sizeof<\/span>(serv_addr));<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-tcpclient-c-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-tcpclient-c-LC26\" class=\"blob-code blob-code-inner js-file-line\">    serv_addr.<span class=\"pl-smi\">sin_family<\/span> = AF_INET;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-tcpclient-c-LC27\" class=\"blob-code blob-code-inner js-file-line\">    serv_addr.<span class=\"pl-smi\">sin_port<\/span> = <span class=\"pl-c1\">htons<\/span>(PORT);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-tcpclient-c-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-tcpclient-c-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Convert IPv4 and IPv6 addresses from text to binary form<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-tcpclient-c-LC30\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span>(<span class=\"pl-c1\">inet_pton<\/span>(AF_INET, <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>127.0.0.1<span class=\"pl-pds\">&quot;<\/span><\/span>, &amp;serv_addr.<span class=\"pl-smi\">sin_addr<\/span>)&lt;=<span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-tcpclient-c-LC31\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-tcpclient-c-LC32\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-cce\">\\n<\/span>Invalid address/ Address not supported <span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-tcpclient-c-LC33\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> -<span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-tcpclient-c-LC34\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-tcpclient-c-LC35\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-tcpclient-c-LC36\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> (<span class=\"pl-c1\">connect<\/span>(sock, (<span class=\"pl-k\">struct<\/span> sockaddr *)&amp;serv_addr, <span class=\"pl-k\">sizeof<\/span>(serv_addr)) &lt; <span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-tcpclient-c-LC37\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-tcpclient-c-LC38\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-cce\">\\n<\/span>Connection Failed <span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-tcpclient-c-LC39\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> -<span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-tcpclient-c-LC40\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-tcpclient-c-LC41\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">send<\/span>(sock , hello , <span class=\"pl-c1\">strlen<\/span>(hello) , <span class=\"pl-c1\">0<\/span> );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-tcpclient-c-LC42\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Hello message sent<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-tcpclient-c-LC43\" class=\"blob-code blob-code-inner js-file-line\">    valread = <span class=\"pl-c1\">read<\/span>( sock , buffer, <span class=\"pl-c1\">1024<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-tcpclient-c-LC44\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">printf<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-c1\">%s<\/span><span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>,buffer );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-tcpclient-c-LC45\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">0<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-tcpclient-c-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-tcpclient-c-LC46\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/SkrewEverything/e31096ac01aa67d28eca283dbbbf96a1/raw/9cf3ae18c362135478c8cb527e165e0be6d62b1f/TCPClient.c\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/SkrewEverything/e31096ac01aa67d28eca283dbbbf96a1#file-tcpclient-c\">TCPClient.c<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
