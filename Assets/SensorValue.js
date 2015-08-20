#pragma strict

var gravity: Vector3;
var acceleration: Vector3;

function Start() {
	gameObject.GetComponent(UI.Text).text = "test";
}

function Update () {
	var alpha = 0.8;
	gravity = alpha * gravity + (1 - alpha) * Input.acceleration;
  	var linear_acceleration = Input.acceleration - gravity;
  	acceleration = alpha * acceleration + (1 - alpha) * linear_acceleration;

	var str = "X: " + Input.acceleration.x + "\nY: " + Input.acceleration.y
			+ "\nZ: " + Input.acceleration.z
			+ "\n\nX: " + acceleration.x + "\nY: " + acceleration.y
			+ "\nZ: " + acceleration.z;
	gameObject.GetComponent(UI.Text).text = str;
}