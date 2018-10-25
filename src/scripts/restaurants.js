// obtain reference to restaurant search button
const restaurantBtn = document.querySelector(".search--restaurants")

//  defining a function to get the data from Zomato API and turn it into JavaScript



const getRestaurantData = () => {
  return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=Italian", {
    headers: {
      "user-key": "335446a1c8d4b48be8722101b589b84d"
    }
  })
    .then(data => data.json())
    .then(returns => { console.log(returns.restaurants[1].restaurant.name) })
}

// add event listener to search button that fetches data when clicked
restaurantBtn.addEventListener("click", () => {
  getRestaurantData()

})