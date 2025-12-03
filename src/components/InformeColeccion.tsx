import MaterialTable from '@material-table/core'
import { ExportCsv, ExportPdf } from '@material-table/exporters'

interface Item {
  nombre: string
  marca: string
  tipo: string
  precio: number
}

interface Props {
  datos: Item[];
}

type TablaColumnas = {
  title: string;
  field: string;
  filtering?: boolean;
  type?: 'numeric';
}[];

export default function InformeColeccion({ datos }: Props) {

  const sumaPrecios = datos.reduce((acc, item) => acc + Number(item.precio), 0)

  const columnas: TablaColumnas = [
    { title: 'Nombre', field: 'nombre', filtering: false },
    { title: 'Marca', field: 'marca', filtering: true },
    { title: 'Tipo', field: 'tipo', filtering: true },
    { title: 'Precio', field: 'precio', type: 'numeric', filtering: false }
  ]

  const datosConvertidos: Record<string, unknown>[] = datos.map(item => ({
    nombre: item.nombre,
    marca: item.marca,
    tipo: item.tipo,
    precio: item.precio
  }))

  const datosConTotal: Record<string, unknown>[] = [
    ...datosConvertidos,
    { nombre: 'TOTAL', marca: '', tipo: '', precio: sumaPrecios }
  ]

  return (
    <MaterialTable
      title="Informe de Colección"
      data={datosConTotal}
      columns={columnas}

      options={{
        filtering: true,
        columnsButton: true,
        draggable: true,
        pageSize: 10,
        pageSizeOptions: [5, 10, 20],
        headerStyle: {
          backgroundColor: '#37474f',
          color: '#fff',
          fontWeight: 'bold'
        },
        rowStyle: (rowData: Record<string, unknown>) => ({
          backgroundColor: rowData.nombre === 'TOTAL' ? '#cfd8dc' : '#eceff1',
          fontWeight: rowData.nombre === 'TOTAL' ? 'bold' : 'normal'
        })
      }}

      actions={[
        {
          icon: () => <span>PDF</span>,
          tooltip: 'Exportar PDF',
          isFreeAction: true,
          onClick: () => ExportPdf(datosConTotal, columnas, 'informe_coleccion')
        },
        {
          icon: () => <span>CSV</span>,
          tooltip: 'Exportar CSV',
          isFreeAction: true,
          onClick: () => ExportCsv(datosConTotal, columnas, 'informe_coleccion')
        }
      ]}
    />
  )
}
