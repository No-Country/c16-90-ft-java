import Breadcrumb from "../components/Admin/Breadcrumbs/Breadcrumb";
import TableUser from "../components/Admin/Tables/TableUser";
import TableThree from "../components/Admin/Tables/TableThree";
import TableBooks from "../components/Admin/Tables/TableBooks";
import DefaultLayout from "../layout/DefaultLayout";

const getTableComponent = (componentType) => {
  switch (componentType) {
    case "userTable":
      return <TableUser />;
    case "bookTable":
      return <TableBooks />;
    default:
      return null;
  }
};

const Tables = ({ pageName, compontentTable, pageRouteName }) => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName={pageName} pageRouteName={pageRouteName} />
      <div className="flex flex-col gap-10">
        {getTableComponent(compontentTable)}
      </div>
    </DefaultLayout>
  );
};

export default Tables;
