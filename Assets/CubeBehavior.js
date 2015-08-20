#pragma strict

var gravity: Vector3;
var acceleration: Vector3;

function Start() {
}

function Update () {
	var alpha = 0.8;
	gravity = alpha * gravity + (1 - alpha) * Input.acceleration;
  	var linear_acceleration = Input.acceleration - gravity;
  	acceleration = alpha * acceleration + (1 - alpha) * linear_acceleration;

	GetComponent(Rigidbody).AddForce(acceleration.x * 100, acceleration.y * 100, acceleration.z * -100, ForceMode.Acceleration);
}