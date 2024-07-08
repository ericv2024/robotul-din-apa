const pesti = [
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1517010347965-8d5f0c0062c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
];

const nonPesti = [
  "https://images.unsplash.com/photo-1674665164327-15789fa6c8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmt8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1664820578859-2a1eddb69bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwdHlyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1653174577821-9ab410d92d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FubmVkJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
];

const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export default shuffle([
  ...pesti.map((p) => ({ src: p, type: "peste" })),
  ...nonPesti.map((p) => ({ src: p, type: "non-peste" })),
]);
