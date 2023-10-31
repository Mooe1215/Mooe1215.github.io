var posts=["2023/10/31/hello-world/","2023/10/31/Post”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };