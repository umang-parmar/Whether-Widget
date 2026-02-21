import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"; 

export default function InfoBox({ info }){
const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

 return( 
    <div className="InfoBox">
       <h1>WhetherInfo -{info.weather}</h1>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div> <br></br>
            <div>Humidity = {info.humidity}</div>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max  Temp = {info.tempMax}&deg;C</p>
            <p>The Weather Can Be Described as <i>{info.weather}</i> and Feels Like = {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>

    </Card>
    </div>
 )

}