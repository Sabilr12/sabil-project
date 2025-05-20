function PageHeader({ title, breadcrumb, children }) {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {breadcrumb && (
              <p className="text-gray-500 text-sm">
                {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
              </p>
            )}
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
    );
  }
  
  export default PageHeader;
  