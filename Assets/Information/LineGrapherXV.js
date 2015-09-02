#pragma strict

private var resolution: int = 200;
private var mesh: Mesh;
private var vertices = new Vector3[resolution];
private var lines =  new int[(resolution - 1) * 2];
private var uvs = new Vector2[resolution];
private var pointColor = new Color[resolution];

function Start () {
	mesh = new Mesh();
	GetComponent(MeshFilter).mesh = mesh;

	var increment: float =  1.0 / (resolution - 1);	
	for (var i: int = 0; i < vertices.Length; i++) {
		vertices[i] = new Vector3(increment * i, 0, 0);
		uvs[i]=Vector2.zero;
		pointColor[i]=Color.green;
	}
	
	for (i = 0; i < lines.Length; i += 2) {
		lines[i] = i / 2;
		lines[i + 1] = i / 2 + 1;
	}
}
       
function Update () {
	for (var i = resolution - 1; i > 0; i--) {
		vertices[i].y = vertices[i - 1].y;
	}
	vertices[0].y = GameObject.Find("Main Camera").GetComponent(CameraController).velocity.x / 10;

	mesh.Clear();
	mesh.vertices = vertices;
	mesh.uv = uvs;
	mesh.colors = pointColor;
	mesh.SetIndices(lines, MeshTopology.Lines, 0);
}
