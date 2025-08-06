import React, { useState } from "react";

function Home() {
  const [usuario] = useState({
    name: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "García",
    curp: "PEGA900101HDFRRL01",
    rfc: "PEGA900101XXX", // <-- RFC agregado
    email: "juan.perez@email.com"
  });

  const [academico, setAcademico] = useState(null);
  const [certificado, setCertificado] = useState(null);

  return (
    <div className="container mt-5" style={{ maxWidth: 700 }}>
      <div className="card shadow mb-4">
        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
          <h4 className="mb-0" style={{ color: "#7A1737" }}>
            <i className="bi bi-person-circle me-2"></i>
            Datos del Usuario
          </h4>
          <button
            style={{
              backgroundColor: "#7A1737",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}
          >
            <i className="bi bi-pencil-square me-1"></i>
            Editar
          </button>
        </div>
        <div className="card-body">
          <table className="table table-borderless align-middle mb-0">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>{usuario.name}</td>
              </tr>
              <tr>
                <th>Apellido Paterno</th>
                <td>{usuario.apellidoPaterno}</td>
              </tr>
              <tr>
                <th>Apellido Materno</th>
                <td>{usuario.apellidoMaterno}</td>
              </tr>
              <tr>
                <th>CURP</th>
                <td>{usuario.curp}</td>
              </tr>
              <tr>
                <th>RFC</th>
                <td>{usuario.rfc}</td>
              </tr>
              <tr>
                <th>Correo Electrónico</th>
                <td>{usuario.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Información Académica */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-mortarboard-fill fs-4 me-3" style={{ color: "#7A1737" }}></i>
          <label className="form-label mb-0 me-2" style={{ minWidth: 160 }}>
            Información Académica
          </label>
          <input
            type="file"
            name="academico"
            accept=".pdf,image/*"
            className="form-control rounded-3 me-2"
            style={{ flex: 1 }}
            onChange={e => setAcademico(e.target.files[0])}
          />
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#7A1737", color: "#fff", borderColor: "#7A1737" }}
          >
            <i className="bi bi-cloud-arrow-up-fill me-1"></i>
            Subir
          </button>
          {academico && (
            <span className="ms-2 small text-muted">{academico.name}</span>
          )}
        </div>
      </div>

      {/* Certificados */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-award-fill fs-4 me-3" style={{ color: "#7A1737" }}></i>
          <label className="form-label mb-0 me-2" style={{ minWidth: 160 }}>
            Certificados
          </label>
          <input
            type="file"
            name="certificado"
            accept=".pdf,image/*"
            className="form-control rounded-3 me-2"
            style={{ flex: 1 }}
            onChange={e => setCertificado(e.target.files[0])}
          />
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#7A1737", color: "#fff", borderColor: "#7A1737" }}
          >
            <i className="bi bi-cloud-arrow-up-fill me-1"></i>
            Subir
          </button>
          {certificado && (
            <span className="ms-2 small text-muted">{certificado.name}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;