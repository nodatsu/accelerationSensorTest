#pragma strict

private var mesh: Mesh;
private var vertices = new Vector3[2];
private var lines =  new int[2];
private var uvs = new Vector2[2];
private var pointColor = new Color[2];

function Start () {
	mesh = new Mesh();
	GetComponent(MeshFilter).mesh = mesh;

	vertices[0] = new Vector3(0, 0, 0);
	vertices[1] = new Vector3(1, 0, 0);
	lines[0] = 0;
	lines[1] = 1;
	uvs[0] = Vector2.zero;
	uvs[1] = Vector2.zero;
	pointColor[0] = Color.black;	
	pointColor[1] = Color.black;	

	mesh.Clear();
	mesh.vertices = vertices;
	mesh.uv = uvs;
	mesh.colors = pointColor;
	mesh.SetIndices(lines, MeshTopology.Lines, 0);
}
