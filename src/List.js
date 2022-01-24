import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) =>{
        const {name, id, age, image} = person
        return(
          <article key={id} className="person">
            <img src={image} alt={name} />
              <div>
                <h4>{age} years</h4>
                <p>{name}</p>
              </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
