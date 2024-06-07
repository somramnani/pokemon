const PokemonListing = ({
  p,
  formattedId,
  formattedName,
  handeOnClickListing,
}) => {
  return (
    <>
      <div className="listing" onClick={() => handeOnClickListing(p)}>
        <p className="name">{formattedName}</p>
        <p>{formattedId}</p>
      </div>
    </>
  );
};

export default PokemonListing;
