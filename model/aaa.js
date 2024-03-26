const url = new URL(window.location.href);
     const searchParams = url.searchParams;

     const id = searchParams.get("id");
     const category = searchParams.get("category");