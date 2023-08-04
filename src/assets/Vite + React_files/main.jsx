import { jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=b3362614"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b3362614"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=b3362614";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=b3362614";
import App from "/src/App.jsx";
import store from "/src/store/store.js?t=1682374498511";
import "/src/styles/reset.css";
import "/src/styles/index.css";
import ConnectionForm from "/src/components/ConnectionForm/ConnectionForm.jsx?t=1682373448042";
import Inscription from "/src/components/Inscription/Inscription.jsx";
import Landing from "/src/components/pages/LandingPage/landingPage.jsx";
import Homepage from "/src/components/pages/Homepage/Homepage.jsx";
import Profil from "/src/components/pages/Profil/Profil.jsx";
import Transaction from "/src/components/Transaction/Transaction.jsx";
import Budgetpage from "/src/components/pages/Budgetpage/Budgetpage.jsx";
import Questspage from "/src/components/pages/Questspage/Questspage.jsx";
import Contactpage from "/src/components/pages/Contactpage/Contactpage.jsx";
import Friendspage from "/src/components/pages/Friendspage/Friendspage.jsx";
import Guildepage from "/src/components/pages/Guildepage/Guildepage.jsx";
import Shoppage from "/src/components/pages/Shoppage/Shoppage.jsx";
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxDEV(Landing, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 23,
    columnNumber: 12
  }, this)
}, {
  path: "/signin",
  element: /* @__PURE__ */ jsxDEV(ConnectionForm, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 26,
    columnNumber: 12
  }, this)
}, {
  path: "/signup",
  element: /* @__PURE__ */ jsxDEV(Inscription, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 29,
    columnNumber: 12
  }, this)
}, {
  path: "/homepage",
  element: /* @__PURE__ */ jsxDEV(Homepage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 32,
    columnNumber: 12
  }, this)
}, {
  path: "/profil/1",
  element: /* @__PURE__ */ jsxDEV(Profil, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 35,
    columnNumber: 12
  }, this)
}, {
  path: "/transaction",
  element: /* @__PURE__ */ jsxDEV(Transaction, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 38,
    columnNumber: 12
  }, this)
}, {
  path: "/budget",
  element: /* @__PURE__ */ jsxDEV(Budgetpage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 41,
    columnNumber: 12
  }, this)
}, {
  path: "/quests",
  element: /* @__PURE__ */ jsxDEV(Questspage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 44,
    columnNumber: 12
  }, this)
}, {
  path: "/contact",
  element: /* @__PURE__ */ jsxDEV(Contactpage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 47,
    columnNumber: 12
  }, this)
}, {
  path: "/friends",
  element: /* @__PURE__ */ jsxDEV(Friendspage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 50,
    columnNumber: 12
  }, this)
}, {
  path: "/guilde",
  element: /* @__PURE__ */ jsxDEV(Guildepage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 53,
    columnNumber: 12
  }, this)
}, {
  path: "/shop",
  element: /* @__PURE__ */ jsxDEV(Shoppage, {}, void 0, false, {
    fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
    lineNumber: 56,
    columnNumber: 12
  }, this)
}]);
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
  lineNumber: 60,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
  lineNumber: 59,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "/var/www/html/apo/projet-09-keep-score-and-have-fun-front/src/main.jsx",
  lineNumber: 58,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBd0JXO0FBeEJYLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixTQUFTQyxxQkFBcUJDLHNCQUFzQjtBQUNwRCxTQUFTQyxnQkFBZ0I7QUFDekIsT0FBT0MsU0FBUztBQUNoQixPQUFPQyxXQUFXO0FBQ2xCLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBT0Msb0JBQW9CO0FBQzNCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsaUJBQWlCO0FBQ3hCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxjQUFjO0FBRXJCLE1BQU1DLFNBQVNqQixvQkFBb0IsQ0FDakM7QUFBQSxFQUNBa0IsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVE7QUFDbkIsR0FDQTtBQUFBLEVBQ0VELE1BQUs7QUFBQSxFQUNMQyxTQUFTLHVCQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZTtBQUMxQixHQUNBO0FBQUEsRUFDRUQsTUFBSztBQUFBLEVBQ0xDLFNBQVEsdUJBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFZO0FBQ3RCLEdBQ0E7QUFBQSxFQUNFRCxNQUFLO0FBQUEsRUFDTEMsU0FBUyx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUztBQUNwQixHQUNBO0FBQUEsRUFDRUQsTUFBSztBQUFBLEVBQ0xDLFNBQVMsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU87QUFDbEIsR0FDQTtBQUFBLEVBQ0VELE1BQUs7QUFBQSxFQUNMQyxTQUFTLHVCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWTtBQUN2QixHQUNBO0FBQUEsRUFDRUQsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXO0FBQ3RCLEdBQ0E7QUFBQSxFQUNFRCxNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVc7QUFDdEIsR0FDQTtBQUFBLEVBQ0VELE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWTtBQUN2QixHQUNBO0FBQUEsRUFDRUQsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFZO0FBQ3ZCLEdBQ0E7QUFBQSxFQUNFRCxNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVc7QUFDdEIsR0FDQTtBQUFBLEVBQ0lELE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTO0FBQ3RCLENBQUMsQ0FDQTtBQUVEcEIsU0FBU3FCLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDLE9BQ25ELHVCQUFDLE1BQU0sWUFBTixFQUNDLGlDQUFDLFlBQVMsT0FDUixpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLQSxDQUFtQiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJQcm92aWRlciIsIkFwcCIsInN0b3JlIiwiQ29ubmVjdGlvbkZvcm0iLCJJbnNjcmlwdGlvbiIsIkxhbmRpbmciLCJIb21lcGFnZSIsIlByb2ZpbCIsIlRyYW5zYWN0aW9uIiwiQnVkZ2V0cGFnZSIsIlF1ZXN0c3BhZ2UiLCJDb250YWN0cGFnZSIsIkZyaWVuZHNwYWdlIiwiR3VpbGRlcGFnZSIsIlNob3BwYWdlIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sImZpbGUiOiIvdmFyL3d3dy9odG1sL2Fwby9wcm9qZXQtMDkta2VlcC1zY29yZS1hbmQtaGF2ZS1mdW4tZnJvbnQvc3JjL21haW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJ1xuaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCBDb25uZWN0aW9uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQ29ubmVjdGlvbkZvcm0vQ29ubmVjdGlvbkZvcm0nO1xuaW1wb3J0IEluc2NyaXB0aW9uIGZyb20gJy4vY29tcG9uZW50cy9JbnNjcmlwdGlvbi9JbnNjcmlwdGlvbic7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvTGFuZGluZ1BhZ2UvbGFuZGluZ1BhZ2UnO1xuaW1wb3J0IEhvbWVwYWdlIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZS9Ib21lcGFnZSc7XG5pbXBvcnQgUHJvZmlsIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qcm9maWwvUHJvZmlsJ1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9UcmFuc2FjdGlvbi9UcmFuc2FjdGlvbic7XG5pbXBvcnQgQnVkZ2V0cGFnZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQnVkZ2V0cGFnZS9CdWRnZXRwYWdlJ1xuaW1wb3J0IFF1ZXN0c3BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9RdWVzdHNwYWdlL1F1ZXN0c3BhZ2VcIjtcbmltcG9ydCBDb250YWN0cGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRhY3RwYWdlL0NvbnRhY3RwYWdlXCI7XG5pbXBvcnQgRnJpZW5kc3BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9GcmllbmRzcGFnZS9GcmllbmRzcGFnZVwiO1xuaW1wb3J0IEd1aWxkZXBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9HdWlsZGVwYWdlL0d1aWxkZXBhZ2VcIjtcbmltcG9ydCBTaG9wcGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL1Nob3BwYWdlL1Nob3BwYWdlXCI7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gIHBhdGg6ICcvJyxcbiAgZWxlbWVudDogPExhbmRpbmcvPlxufSxcbntcbiAgcGF0aDonL3NpZ25pbicsXG4gIGVsZW1lbnQ6IDxDb25uZWN0aW9uRm9ybSAvPlxufSxcbntcbiAgcGF0aDonL3NpZ251cCcsXG4gIGVsZW1lbnQ6PEluc2NyaXB0aW9uIC8+XG59LFxue1xuICBwYXRoOicvaG9tZXBhZ2UnLFxuICBlbGVtZW50OiA8SG9tZXBhZ2UgLz5cbn0sXG57XG4gIHBhdGg6Jy9wcm9maWwvMScsXG4gIGVsZW1lbnQ6IDxQcm9maWwgLz5cbn0sXG57XG4gIHBhdGg6Jy90cmFuc2FjdGlvbicsXG4gIGVsZW1lbnQ6IDxUcmFuc2FjdGlvbiAvPlxufSxcbntcbiAgcGF0aDogJy9idWRnZXQnLFxuICBlbGVtZW50OiA8QnVkZ2V0cGFnZSAvPlxufSxcbntcbiAgcGF0aDogJy9xdWVzdHMnLFxuICBlbGVtZW50OiA8UXVlc3RzcGFnZSAvPlxufSxcbntcbiAgcGF0aDogJy9jb250YWN0JyxcbiAgZWxlbWVudDogPENvbnRhY3RwYWdlIC8+XG59LFxue1xuICBwYXRoOiAnL2ZyaWVuZHMnLFxuICBlbGVtZW50OiA8RnJpZW5kc3BhZ2UgLz5cbn0sXG57XG4gIHBhdGg6ICcvZ3VpbGRlJyxcbiAgZWxlbWVudDogPEd1aWxkZXBhZ2UgLz5cbn0sXG57XG4gICAgcGF0aDogJy9zaG9wJyxcbiAgICBlbGVtZW50OiA8U2hvcHBhZ2UgLz5cbn1cbl0pXG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG5cbiAgICA8L1Byb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuKVxuXG5cbiJdfQ==