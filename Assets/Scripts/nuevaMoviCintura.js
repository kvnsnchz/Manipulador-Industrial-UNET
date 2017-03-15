#pragma strict

var rb: Rigidbody;

function Start() {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
  if(Input.GetKey(KeyCode.D)){
    rb.AddRelativeTorque(transform.forward *5 );
  }
  else{
    if(Input.GetKey(KeyCode.I)){
      transform.Rotate(new Vector3(-30,0,0)*Time.deltaTime);
    }

      
  }
}