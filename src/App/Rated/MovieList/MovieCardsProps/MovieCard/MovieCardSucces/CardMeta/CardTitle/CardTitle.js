import React from 'react'

const CardTitle = ({ ratingData, title, vote_average }) => {
  return (
    <div className="title">
      <span>{title}</span>
      <span
        style={
          ratingData === 0
            ? { borderColor: 'silver' }
            : ratingData <= 3
              ? { borderColor: '#E90000' }
              : ratingData <= 5
                ? { borderColor: '#E97E00' }
                : ratingData <= 7
                  ? { borderColor: '#E9D100' }
                  : ratingData > 7
                    ? { borderColor: '#66E900' }
                    : null
        }
      >
        {Math.ceil(vote_average * 10) / 10}
      </span>
    </div>
  )
}

export default CardTitle
