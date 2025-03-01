<style>
        {`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: #ffffff;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        }

        .products-container {
          display: flex;
          margin-top: 70px;
        }

        .sidebar {
          position: fixed;
          top: 70px;
          left: 0;
          width: 18%;
          height: calc(100vh - 70px);
          background-color: #f8f9fa;
          padding: 20px;
          color: #333;
          overflow-y: auto;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          border-right: 2px solid #ddd;
        }

        .product-content {
          margin-left: 20%;
          width: 80%;
          padding: 20px;
        }
        `}
      </style>