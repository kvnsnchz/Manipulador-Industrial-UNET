// Rotate an object around its Y (upward) axis in response to
// left/right controls.
var torque: float;
var rb: Rigidbody;

function Start() {
	rb = GetComponent.<Rigidbody>();
}


function FixedUpdate() {
	var turn = Input.GetAxis("Horizontal");
	rb.AddTorque(transform.up * torque );
}