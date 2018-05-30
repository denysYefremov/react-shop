###Troubleshooting
####Different ruby version

1. Download and setup RVM:
    * Distributing keys
        ```
        gpg --keyserver hkp://keys.gnupg.net --recv-keys
        409B6B1796C275462A1703113804BB82D39DC0E3
        7D2BAF1CF37B13E2069D6956105BD0E739499BDB
        ```
    * `\curl -sSL https://get.rvm.io | bash -s stable`
2. In Gemfile after "source https://rubygems.org" insert needed version (E.g ruby "2.5.1")
3. Run `rvm install ruby-head`
    * In case of error 
        ```
        rvm get stable --auto-dotfiles
        \curl -sSL https://get.rvm.io | bash
        rvm cleanup all
        rvm reload
        ```
4. Run `bundle update –ruby`
5. Run `bundle platform –ruby`

<h4><span style="color:blue">ps: unknown option -o</span></h4>
In  “~/.rvm/scripts/rvm” after line 12 insert<br />
    `(MINGW64_NT*) __shell_name="\command \ps -p $$ | \command \awk 'END {print $NF}' 2>/dev/null" ;;`
