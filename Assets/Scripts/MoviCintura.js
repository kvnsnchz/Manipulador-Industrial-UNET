#pragma strict



function Update () {
  if(Input.GetKey(KeyCode.D)){
    transform.Rotate(new Vector3(30,0,0)*Time.deltaTime);
  }
  else{
    if(Input.GetKey(KeyCode.I)){
      transform.Rotate(new Vector3(-30,0,0)*Time.deltaTime);
    }
  }
}