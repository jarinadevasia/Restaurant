import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <>
    <Link to={`/restaurant_view/${restaurant?.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem' }} className='p-2'>
      <Card.Img variant="top" src={restaurant?.photograph}/>
      <Card.Body>
        <Card.Title className='text-center text-warning'style={{fontSize:'20px'}}>{restaurant.name}</Card.Title>
        <Card.Text className='text-center'>
          Neighbour Hood:<span className='text-warning ms-2'>{restaurant.neighborhood}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default RestCard