#pragma strict

private var lineRenderer: LineRenderer;
private var position: Vector3;
private var next_position: Vector3;

function Start() {
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.enabled = true;
	lineRenderer.SetVertexCount(2);
	position = transform.position;
	next_position = position;

	lineRenderer.SetPosition(0, position);
}

function Update () {
//	next_position = GameObject.Find("Main Camera").GetComponent(CameraController).velocity;
//	next_position = Input.gyro.rotationRate * 100;
	next_position = Input.gyro.gravity;
	lineRenderer.SetPosition(1, next_position);
}