#pragma strict

var lineRenderer: LineRenderer;
var position: Vector3;
var next_position: Vector3;

function Start() {
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.enabled = true;
	lineRenderer.SetVertexCount(2);
	position = transform.position;
	next_position = position;

	lineRenderer.SetPosition(0, position);
}

function Update () {
	next_position = Input.gyro.userAcceleration * 10;
	lineRenderer.SetPosition(1, next_position);
}