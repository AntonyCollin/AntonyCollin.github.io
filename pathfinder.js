$("a").each(function () {
  console.log(window.location.pathname);
  console.log($(this).attr("href"));
  if ($(this).attr("href") === window.location.pathname) {
    $(this).css({ color: "rgb(183, 17, 183)" });
    return false;
  }
});
