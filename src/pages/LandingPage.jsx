import Card from "../components/Card.jsx";

function LandingPage() {
  const links = [
    {
      href: "/bookmark",
      image: "/screenShots/img-1.png",
      title: "Bookmark",
    },
    {
      href: "/clipboard",
      image: "/screenShots/img-2.png",
      title: "Clipboard",
    },
    {
      href: "/fylo",
      image: "/screenShots/img-3.png",
      title: "Fylo Website",
    },
    {
      href: "/loopstudios",
      image: "/screenShots/img-4.png",
      title: "Loop Studios",
    },
    {
      href: "/shortly",
      image: "/screenShots/img-5.png",
      title: "Shortly",
    },
    {
      href: "/testimonial-grid",
      image: "/screenShots/img-6.png",
      title: "Testominal Grid",
    },
    {
      href: "/login-modal",
      image: "/screenShots/img-7.png",
      title: "Login Modal",
    },
    {
      href: "/pricing-cards",
      image: "/screenShots/img-8.png",
      title: "Pricing Cards",
    },
    {
      href: "/product-modal",
      image: "/screenShots/img-9.png",
      title: "Product Modal",
    },
    {
      href: "/email-subscribe",
      image: "/screenShots/img-10.png",
      title: "Email Subscribe",
    },
    {
      href: "/image-gallery",
      image: "/screenShots/img-11.png",
      title: "Image Gallery",
    },
  ];

  return (
    <div className="mt-10 px-10 mx-auto max-w-3xl md:max-w-4xl lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <Card
          key={link.href}
          title={link.title}
          image={link.image}
          link={link.href}
        />
      ))}
    </div>
  );
}

export default LandingPage;
