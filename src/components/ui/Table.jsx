import React from "react";

export function Table({ title, headers = [], data = [] }) {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        overflow: "hidden",
        padding: "16px",
      }}
    >
      {title && (
        <h3 style={{ marginBottom: "12px" }}>{title}</h3>
      )}

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          {/* HEADER */}
          <thead>
            <tr style={{ backgroundColor: "#f9fafb" }}>
              {headers.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#111827",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor:
                      rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb",
                  }}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid #f1f5f9",
                        color: "#374151",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
