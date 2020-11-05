import ls from "local-storage";

export const initialState = {
  isDark: false,
  users: [],
  bestUser: {
    name: "@fred",
    avatar:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Vincenzo_Guzzo_profile_photo.jpg",
    facebook: 25000,
    twitter: 33000,
    instagram: 7000,
    youtube: 3000, total: 68000
  }
};

// // Selector
// export const getBestUser = (users) => {
//   const sorted = users?.sort(function (a, b) {
//     return a?.total - b?.total;
//   });
  
//   return sorted[0];
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        isDark: action.isDark,
      };
    
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.newUser]
      };
    
    case "SET_BEST_USER":
      return {
        bestUser: action.bestUser,
      };
    
    default:
      return state;
  }
};

export const getCategories = () => {
  return [
    {
      id: 9,
      category: "General Knowledge",
    },

    {
      id: 10,
      category: "Entertainment:Books",
    },

    {
      id: 11,
      category: "Entertainment:Film",
    },
    {
      id: 12,
      category: "Entertainment:Music",
    },

    {
      id: 13,
      category: "Entertainment:Musicals & Theatres",
    },
    {
      id: 14,
      category: "Entertainment:Television",
    },
    {
      id: 15,
      category: "Entertainment:Video Games",
    },
    {
      id: 16,
      category: "Entertainment:Board Games",
    },
    {
      id: 17,
      category: "Science & Nature",
    },
    {
      id: 18,
      category: "Science: Computers",
    },
    {
      id: 19,
      category: "Science: Mathematics",
    },
    {
      id: 20,
      category: "Mythology",
    },
    {
      id: 21,
      category: "Sports",
    },
    {
      id: 22,
      category: "Geography",
    },
    {
      id: 23,
      category: "History",
    },
    {
      id: 24,
      category: "Politics",
    },
    {
      id: 25,
      category: "Art",
    },
    {
      id: 26,
      category: "Celebrities",
    },
    {
      id: 27,
      category: "Animals",
    },
    {
      id: 28,
      category: "Vehiculs",
    },
    {
      id: 29,
      category: "Comics",
    },
    {
      id: 30,
      category: "Science: Gadgets",
    },
    {
      id: 31,
      category: "Japanese Anime",
    },
    {
      id: 32,
      category: "Cartoon & Animations",
    },
  ];
};

export default reducer;
