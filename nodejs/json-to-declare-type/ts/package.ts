export interface Package {
    name:            string;
    version:         string;
    description:     string;
    main:            string;
    scripts:         Scripts;
    author:          string;
    license:         string;
    devDependencies: DevDependencies;
}

export interface DevDependencies {
    quicktype: string;
}

export interface Scripts {
    test: string;
}
