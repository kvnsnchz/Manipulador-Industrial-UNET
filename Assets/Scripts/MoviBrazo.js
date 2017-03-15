#pragma strict

function Update () {
   
 if(Input.GetKey(KeyCode.E)){
    transform.Rotate (new Vector3(0,0,30)*Time.deltaTime);
 }
 else{
     if(Input.GetKey(KeyCode.F)){
        transform.Rotate(new Vector3(0,0,-30)*Time.deltaTime);
     }
 }
}