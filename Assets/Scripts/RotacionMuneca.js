#pragma strict



function Update () {
 if(Input.GetKey(KeyCode.RightArrow)){
    transform.Rotate (new Vector3(0,30,0)*Time.deltaTime);
 }
 else{
     if(Input.GetKey(KeyCode.LeftArrow)){
        transform.Rotate(new Vector3(0,-30,0)*Time.deltaTime);
     }
 }
}