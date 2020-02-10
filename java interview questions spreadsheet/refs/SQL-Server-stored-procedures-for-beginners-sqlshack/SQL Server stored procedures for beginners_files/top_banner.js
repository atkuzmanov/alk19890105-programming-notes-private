var read_more = document.getElementsByClassName('more-link');
if (read_more.length == 0)
{
    var avatar = document.getElementsByClassName('avatar')[0];
    avatar.style.setProperty("display", "none", "important");

    var entry_content = document.getElementsByClassName('entry-content')[0];
    var up_ban_center = document.createElement('center');

    var up_ban_div = document.createElement('div');
    up_ban_div.style.padding = "0px 0px 25px 0px";

    var up_ban_link = document.createElement('a');
    up_ban_link.href = "https://www.apexsql.com/freesqltools?utm_source=sqlshack&amp;utm_medium=banner&amp;utm_campaign=[SQLShack]ApexSQLfreetoolstop";
	up_ban_link.target="_blank";
	up_ban_link.rel = "noopener noreferrer";

    var up_ban_img = document.createElement('img');
    up_ban_img.src = "https://www.apexsql.com/images/blog-footer-banners/Free-tools-B.png";

    up_ban_link.appendChild(up_ban_img);
    up_ban_div.appendChild(up_ban_link);
    up_ban_center.appendChild(up_ban_div);

    entry_content.insertBefore(up_ban_center, entry_content.firstChild);
}