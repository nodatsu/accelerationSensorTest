#pragma strict

private var currentVelocity: Vector3;
private var lineRenderer: LineRenderer;
private var position: Vector3;
private var next_position: Vector3;

function Start() {
	currentVelocity = Vector3.zero;
	
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.enabled = true;
	lineRenderer.SetVertexCount(2);
	position = transform.position;
	next_position = position;

	lineRenderer.SetPosition(0, position);
}

function Update () {
	currentVelocity += Input.gyro.userAcceleration * Time.deltaTime * 100;
	
	next_position = currentVelocity;
	lineRenderer.SetPosition(1, next_position);
}