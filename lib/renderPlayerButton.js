export function renderPlayerButtons(numberOfPlayers, playersScore) {
  const playerButtons = [];
  console.log(playersScore);
  for (let i = 0; i < numberOfPlayers; i++) {
    playerButtons.push(
      <div
        key={i}
        className="flex-1 bg-[#dfe7ec] rounded-[5px] flex flex-col justify-center items-center   "
      >
        <p className="py-2 text-[#7191a5] leading-normal font-bold text-[15px] ">
          P{i + 1}
        </p>
        <h6 className="text-[#304859] text-2xl font-bold leading-normal">
          {playersScore[`player${i + 1}`]}
        </h6>
      </div>
    );
  }
  return playerButtons;
}
