const hackillinois = () => ({
  roomId: 'siebel-center-entrance',
  rooms: [
    {
      id: 'siebel-center-entrance',
      name: 'Siebel Center Entrance',
      desc: `There's an atrium to the EAST.`,
      items: [],
      exits: [
        {
          dir: 'east',
          id: 'siebel-center-atrium',
        },
      ],
    },
    {
      id: 'siebel-center-atrium',
      name: 'Siebel Center Atrium',
      desc: `The entrance is to to the WEST.`,
      items: [],
      exits: [
        {
          dir: 'west',
          id: 'siebel-center-entrance',
        },
      ],
    },
  ],
});
