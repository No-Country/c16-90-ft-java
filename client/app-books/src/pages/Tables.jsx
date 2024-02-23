import Breadcrumb from "../Components/Admin/Breadcrumbs/Breadcrumb";
import TableUser from "../Components/Admin/Tables/TableUser";
import TableThree from "../Components/Admin/Tables/TableThree";
import TableBooks from "../Components/Admin/Tables/TableBooks";
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
