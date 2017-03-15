#pragma strict



function Update () {
   if(Input.GetKey(KeyCode.UpArrow)){
    transform.Rotate (new Vector3(30,0,0)*Time.deltaTime);
 }
 else{
     if(Input.GetKey(KeyCode.DownArrow)){
        transform.Rotate(new Vector3(-30,0,0)*Time.deltaTime);
     }
 }
}