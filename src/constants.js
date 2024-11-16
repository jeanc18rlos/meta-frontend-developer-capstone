export const LINKS = [
  {
    label: "Navigation",
    links: [
      {
        url: "/",
        label: "Home",
        type: "internal",
      },
      {
        url: "/#about-us",
        label: "About",
        type: "anchor",
      },
      {
        url: "/#menu",
        label: "Menu",
        type: "anchor",
      },
      {
        url: "/#testimonials",
        label: "Testimonials",
        type: "anchor",
      },
      {
        url: "/booking",
        label: "Reservations",
        type: "internal",
      },
    ],
  },
  {
    label: "Contact",
    links: [
      {
        url: "https://maps.app.goo.gl/9vwic2nA4QRoiZ7p8",
        label: "Address",
        type: "external",
      },
      {
        url: "+123456789",
        label: "Phone number",
        type: "phone",
      },
      {
        url: "info@littlelemon.com",
        label: "Email",
        type: "mail",
      },
    ],
  },
  {
    label: "Social Media",
    links: [
      {
        url: "https://facebook.com",
        label: "Facebook",
        type: "external",
      },
      {
        url: "https://instagram.com",
        label: "Instagram",
        type: "external",
      },
      {
        url: "https://twitter.com",
        label: "Twitter",
        type: "external",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Jane Doe",
    title: "Regular customer",
    image: "/images/avatar-1.jpg",
    description:
      "Great food and service!, My favorite place to eat in Chicago so far; I highly recommend it!",
    rating: 4,
  },
  {
    name: "John Doe",
    title: "First time visitor",
    image: "/images/avatar-3.jpg",
    description:
      "I was visiting Chicago and found this place by accident. I'm glad I did, the food was amazing!",
    rating: 3,
  },
  {
    name: "Alice Doe",
    title: "Food critic",
    image: "/images/avatar-2.jpg",
    description:
      "I've been to many restaurants in Chicago, and this one is one of the best. The food is delicious and the service is great.",
    rating: 5,
  },
];
export const MENU = [
  {
    title: "Greek salad",
    description:
      "Our traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese with a handful of mint leaves for a fresh finishing touch.",
    image: "/images/greek-salad.jpg",
    price: "12.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Bruschetta",
    description:
      "Our bruschetta is a classic Italian antipasto. It consists of grilled bread rubbed with garlic and topped with olive oil and salt. You can add tomatoes, vegetables, beans, cured meat, or cheese.",
    image: "/images/bruschetta.jpg",
    price: "5.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Lemon Dessert",
    image: "/images/lemon-dessert.jpg",
    description:
      "Our lemon dessert is a traditional lemon sorbet. It's a refreshing and tangy treat that will cleanse your palate and leave you feeling satisfied.",
    price: "3.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Spaghetti Carbonara",
    description:
      "Our spaghetti carbonara is a classic Italian pasta dish made with eggs, cheese, bacon, and black pepper. The dish was created in the middle of the 20th century.",
    image: "/images/spaghetti-carbonara.jpg",
    price: "14.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Pizza Margherita",
    description:
      "Our pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    image: "/images/pizza-margherita.jpg",
    price: "9.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Cappuccino",
    description:
      "Our cappuccino is an Italian coffee drink that is traditionally prepared with equal parts of espresso, steamed milk, and milk foam on top.",
    image: "/images/cappuccino.jpg",
    price: "2.99",
    link: "/booking",
    linkText: "Order a delivery",
  },

  {
    title: "Croissant",
    description:
      "Our croissant is a buttery, flaky, viennoiserie pastry named for its well-known crescent shape. It's made of a layered yeast-leavened dough.",
    image: "/images/croissant.jpg",
    price: "1.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Caesar Salad",
    description:
      "Our Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.",
    image: "/images/caesar-salad.jpg",
    price: "10.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Mojito",
    description:
      "Our mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.",
    image: "/images/mojito.jpg",
    price: "7.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
];

export const OCCASIONS = [
  { value: "Birthday", label: "Birthday", icon: "birthday" },
  { value: "Anniversary", label: "Anniversary", icon: "candle" },
  { value: "Engagement", label: "Engagement", icon: "engagement" },
];
