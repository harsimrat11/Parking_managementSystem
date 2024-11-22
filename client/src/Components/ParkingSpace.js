import React from 'react'
import '../Styles/ParkingSpace.css'

const ParkingSpace = () => {
  return (
    <div className='mainContainerParkingSpace'>
        <h1>Parking Space</h1>
        <div>
            <div>
                <div className='twowheeler'>
                    <h2>2 Wheeler Parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
                </div>
                <div className='threewheeler'>
                    <h2>3 Wheeler Parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
                </div>
                <div className='fourwheeler'>
                    <h2>4 Wheeler Parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParkingSpace