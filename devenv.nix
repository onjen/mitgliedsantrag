{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  devcontainer.enable = true;

  # https://devenv.sh/languages/
  languages.javascript.enable = true;
  languages.javascript.npm.enable = true;
  languages.javascript.npm.install.enable = true;

  scripts.dev= {
    exec = ''
      npm run dev
    '';
    description = "Start dev";
  };

  scripts.lint= {
    exec = ''
      npm run lint
    '';
    description = "Start lint";
  };

  scripts.build = {
    exec = ''
      npm run build
    '';
    description = "Start build";
  };

  enterShell = ''
    echo
    echo 🦾 Helper scripts you can run to make your development richer:
    echo 🦾
    ${pkgs.gnused}/bin/sed -e 's| |••|g' -e 's|=| |' <<EOF | ${pkgs.util-linuxMinimal}/bin/column -t | ${pkgs.gnused}/bin/sed -e 's|^|🦾 |' -e 's|••| |g'
    ${lib.generators.toKeyValue {} (lib.mapAttrs (name: value: value.description) config.scripts)}
    EOF
    echo
  '';

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    eslint.enable = true;
  };
}
