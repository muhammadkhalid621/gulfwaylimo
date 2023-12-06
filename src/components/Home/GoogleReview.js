import { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              place_id: 'YOUR_PLACE_ID', // Replace with the actual place ID
              fields: 'reviews',
              key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
            },
          }
        );

        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error('Error fetching Google Reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.author_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
