$white: rgba(255, 255, 255, 1);
$black: rgba(38, 38, 38, 1);
$lightGray: rgba(245, 239, 237, 1);
$gray: rgba(213, 223, 229, 1);
$lightBlue: rgba(86, 203, 249, 1);
$blue: rgba(28, 119, 195, 1);

body {
  background-color: $lightGray;
}

.timeline_container {
  height: 600px;
  background-image: linear-gradient(to bottom, rgba(0, 121, 193, 0.75) 0%, rgba(70, 93, 255, 0.75) 100%), url(http://bluebeam.com/uk/bluebeamchallenge/_assets/bg-hero.jpg);
  
  h1 {
    margin-top: 50px;
    margin-bottom: 350px;
    color: $white;
  }
  p { 
  font-family: 'Source Sans Pro', sans-serif; 
  font-size: 18px;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
  }

}



.timeline {
  width: 100%;
  position: relative;
  perspective: 5000px;
  
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 15px;
    background-color: $gray;
    border-radius: 15px;
    top: 76px;
  }
  
  .timeline-item {
    text-align: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
    
    &:hover {
      
      &:after {
        transform: scale(1.5, 1.5);
      }
      
    }
    
    &.selected {
      
      &:after {
        background-color: $blue;
        border: 5px solid $lightBlue;
        transform: scale(1.5, 1.5);
      }
      
    }
    
    &:after {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 69px;
      left: 50%;
      margin-left: -15px;
      background-color: $lightGray;
      border: 5px solid $gray;
      content: "";
      border-radius: 50%;
      transition: transform .5s ease;
    }
    .timeline-content {
      position: absolute;
      top: -300px;
      display: none;
      width: 350px;
      left: -60px;
      cursor: auto;
      &.fadeIn {
        animation-delay: .2s;
      }
      &.animated {
        display: block;
      }
    }
  }
  
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
}

.flex-items-default {
  width: 224px;
  height: 150px;
}

.dropdown {
  width: 200px;
  height: 126px;
  background: $white;
  box-shadow: 0 3px 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  top: -80px;
  // display: none;
  animation-duration: .2s;
  transition: left .3s ease;
  
  .inner {
    position: relative;
    width: 100%;
    height: 126px;
    
    .arrow-down {
      position: absolute;
      bottom: -19px;
      left: 90%;
      margin-left: -20px;
    }
    
  }
  
}

.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid $white;
}

.animated {
  display: block;
}

.material-icons {
  position: absolute;
  top: 189px;
  left: 160px;
  width: 100%;
  color: $white;
  font-size: 33px;
}

.hexagon {
  position: relative;
  width: 75px; 
  height: 43.30px;
  background-color: $blue;
  margin: 21.65px 0;
  left: 50%;
  margin-left: -37px;
  top: 25px;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 37.5px solid transparent;
  border-right: 37.5px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 21.65px solid $blue;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 21.65px solid $blue;
}