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
	var alpha = 0.8;
	gravity = alpha * gravity + (1 - alpha) * Input.acceleration;
  	var lenear_acceleration = Input.acceleration - gravity;
  	acceleration = alpha * acceleration + (1 - alpha) * lenear_acceleration;

	var acc = this.transform.localRotation * acceleration;			

	next_position.x = position.x + acc.x * 10;
	next_position.y = position.x + acc.y * 10;
	next_position.z = position.z + acc.z * -10;
	lineRenderer.SetPosition(1, next_position);
}