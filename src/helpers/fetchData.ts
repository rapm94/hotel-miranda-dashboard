export function fetchRooms() {
  console.log("getRooms")
    return fetch("/data/rooms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
 

  export function fetchBookings() {  
    return  fetch("/data/booking.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res:any) => JSON.parse(res))
      .catch((e) => console.log(e));
  }; 