const rooms = [
  {
    name: "West Entrance",
    id: "westEntrance",
    desc: "You are at the west entrance of Siebel Center. There are students bustling around and a reception desk nearby. You can go: north to the ACM Front Room or east to the Atrium.",
    exits: [
      { dir: "north", id: "acmFrontRoom" },
      { dir: "east", id: "atrium" },
    ],
  },
  {
    name: "ACM Front Room",
    id: "acmFrontRoom",
    desc: "You are at the ACM front room. The room is generally used as a lounging area. You can go: north to the ACM Middle Room, south to the West Entrance.",
    exits: [
      { dir: "north", id: "acmMiddleRoom" },
      { dir: "south", id: "westEntrance" },
    ],
  },
  {
    name: "ACM Middle Room",
    id: "acmMiddleRoom",
    desc: "You are in the ACM middle room. The room is mainly for studying and doing group work. There are monitors in the center of the room. You can go: north to the ACM Back Room, south to the ACM Front Room.",
    exits: [
      { dir: "north", id: "acmBackRoom" },
      { dir: "south", id: "acmFrontRoom" },
    ],
  },
  {
    name: "ACM Back Room",
    id: "acmBackRoom",
    desc: "You are in the ACM back room. The room is the creative space. There are gaming consoles and PCs set up for gaming tournaments. You can go: south to the ACM Middle Room.",
    exits: [{ dir: "south", id: "acmMiddleRoom" }],
  },
  {
    name: "Atrium",
    id: "atrium",
    desc: "You are in the atrium. The space is filled with natural light and has seating areas. You can go: west to return to the West Entrance, north to the Cafe, east to the East Entrance, or up to the 2nd Floor Lobby.",
    exits: [
      { dir: "west", id: "westEntrance" },
      { dir: "north", id: "cafe" },
      { dir: "east", id: "eastEntrance" },
      { dir: "up", id: "secondFloorLobby" },
    ],
  },
  {
    name: "Cafe",
    id: "cafe",
    desc: "You are in the cafe. The aroma of coffee fills the air, and students are chatting over their drinks. You can go: south to return to the Atrium, east to the East Entrance.",
    exits: [
      { dir: "south", id: "atrium" },
      { dir: "east", id: "eastEntrance" },
    ],
  },
  {
    name: "East Entrance",
    id: "eastEntrance",
    desc: "You are at the east entrance of Siebel Center. There are students bustling around and a reception desk nearby. You can go: west to the Atrium, north to Lecture Hall 1404.",
    exits: [
      { dir: "west", id: "atrium" },
      { dir: "north", id: "lectureHall1404" },
    ],
  },
  {
    name: "Lecture Hall 1404",
    id: "lectureHall1404",
    desc: "You are in Lecture Hall 1404. Rows of seats face a large screen at the front. You can go: south to return to the East Entrance.",
    exits: [{ dir: "south", id: "eastEntrance" }],
  },
  {
    name: "2nd Floor Lobby",
    id: "secondFloorLobby",
    desc: "You are in the 2nd floor lobby. There are several corridors leading to different departments. You can go: down to the Atrium or up to the 3rd Floor Lobby.",
    exits: [
      { dir: "down", id: "atrium" },
      { dir: "up", id: "thirdFloorLobby" },
    ],
  },
  {
    name: "3rd Floor Lobby",
    id: "thirdFloorLobby",
    desc: "You are in the 3rd floor lobby. There are several corridors leading to different departments. You can go: down to the 2nd Floor Lobby or south to the AI Research Lab.",
    exits: [
      { dir: "down", id: "secondFloorLobby" },
      { dir: "south", id: "aiResearchLab" },
    ],
  },
  {
    name: "AI Research Lab",
    id: "aiResearchLab",
    desc: "You are in the AI research lab. Various research projects are being conducted here. You can go: north to the 3rd Floor Lobby.",
    exits: [{ dir: "north", id: "thirdFloorLobby" }],
  },
];

const hackillinois = () => ({
  roomId: "westEntrance",
  rooms: rooms,
});
