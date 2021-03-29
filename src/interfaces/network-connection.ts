import { NavigatorConnection } from "./navigator-connection";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NetworkConnection extends NavigatorConnection {
    /**
     * Returns a true or false indicating whether the browser is working online.
     */
    isOnline: boolean;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { NetworkConnection };

// #endregion Export
