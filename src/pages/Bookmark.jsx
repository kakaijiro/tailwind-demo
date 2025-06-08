import { useEffect } from "react";

function Bookmark() {
  useEffect(() => {
    document.title = "Bookmark Website";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/bookmark/favicon-32x32.png";
  }, []);

  return <div>Bookmark</div>;
}

export default Bookmark;
