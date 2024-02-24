const rooms = [
  {
      name: "Lobby",
      id: "lobby",
      desc: "You are in the lobby of Siebel Center. There are students bustling around and a reception desk nearby. You can go: north to the Lecture Hall, east to the Computer Lab, or south to the Atrium.",
      exits: [
          { dir: "north", id: "lectureHall" },
          { dir: "east", id: "computerLab" },
          { dir: "south", id: "atrium" }
      ]
  },
  {
      name: "Lecture Hall",
      id: "lectureHall",
      desc: "You are in a lecture hall. Rows of seats face a large screen at the front. You can go: south to return to the Lobby.",
      exits: [
          { dir: "south", id: "lobby" }
      ]
  },
  {
      name: "Computer Lab",
      id: "computerLab",
      desc: "You are in a computer lab. Rows of computers line the tables. You can go: west to return to the Lobby.",
      exits: [
          { dir: "west", id: "lobby" }
      ]
  },
  {
      name: "Atrium",
      id: "atrium",
      desc: "You are in the atrium. The space is filled with natural light and has seating areas. You can go: north to return to the Lobby, or east to the Research Lab.",
      exits: [
          { dir: "north", id: "lobby" },
          { dir: "east", id: "researchLab" }
      ]
  },
  {
      name: "Research Lab",
      id: "researchLab",
      desc: "You are in a research lab. Various projects and experiments are set up on tables. You can go: west to return to the Atrium.",
      exits: [
          { dir: "west", id: "atrium" }
      ]
  }
];



const hackillinois = () => ({
  roomId: 'lobby',
  rooms: rooms,
});
