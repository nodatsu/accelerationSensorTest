#pragma strict

var lineRenderer: LineRenderer;
var position: Vector3;
var next_position: Vector3;
var gravity: Vector3;
var acceleration: Vector3;

function Start() {
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.enabled = true;
	lineRenderer.SetVertexCount(2);
	position = transform.position;
	next_position = position;

	lineRenderer.SetPosition(0, position);
}

function Update () {
	var input_acceleration = Input.acceleration;
	input_acceleration.z *= -1;
	var alphaG = 0.8;
	gravity = alphaG * gravity + (1 - alphaG) * input_acceleration;
  	var linear_acceleration = input_acceleration - gravity;
	var alphaA = 0.9;
   	acceleration = alphaA * acceleration + (1 - alphaA) * linear_acceleration;

	var acc = this.transform.localRotation * acceleration;			

	next_position = position + acc * 10;
	lineRenderer.SetPosition(1, next_position);
}