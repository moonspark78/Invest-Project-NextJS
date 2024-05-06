import React from 'react'


// Type Props
type Props ={
    bg:string;
    days:string;
    percentage:string;
    minInvest:string;
    maxInvest:string;

}

const PriceCard = ({bg,days,percentage,minInvest,maxInvest}:Props) => {
  return (
    <div>PriceCard</div>
  )
}

export default PriceCard